import { read, write } from '../utils/model.js';
import jwt from '../utils/jwt.js';
import { resolve } from 'path';
import { BadRequrestError , InternalServerError } from '../utils/errors.js';

const LOGIN = (req, res, next) => {
  try {   
    const users = read('users');
    const { username, password } = req.body;
    const user = users.find(
      (user) => user.username == username && user.password == password,
    );

    if (!user) {
  return next(new BadRequrestError(400, "wrong username or password"));
    }
    delete user.password;
    res.status(200).json({
      status: 200,
      message: 'success',
      access_token: jwt.sign({ userId: user.userId }),
      data: user,
    });
  } catch (error) {
    return next(new InternalServerError(500, "Internal Server Error"));
  }
};

const REGISTER = (req, res, next) => {
  try {
    const users = read('users');
    const { username, password } = req.body;
    const { avatar } = req.files; 
    const user = users.find((user) => user.username == username);

    if (user) {
      throw new Error('username exists');
    }

    const avatarImage = Date.now() + avatar.name.replace(/\s/g, '');
    avatar.mv(resolve('uploads', avatarImage));

    const newUser = {
      userId: users.at(-1).userId + 1 || 1,
      username,
      password,
      avatar: avatarImage,
    };
    users.push(newUser)
    write('users', users)

    delete newUser.password;
    res.status(201).json({
      status: 201,
      message: 'success',
      access_token: jwt.sign({ userId: newUser.userId }),
      data: newUser,
    });
  } catch (error) {
  return next(new InternalServerError(500, "Internal Server Error"));
  }
};

const GET = (req, res, next) => {
  try {
    const users = read('users').filter(user => delete user.password)

    res.status(200).json({
      status: 200,
      message: 'success',
      data: users,
    });
  } catch (error) {
  return next(new InternalServerError(500, "Internal Server Error"));
  }
};

export default {
  LOGIN,
  REGISTER,
  GET
};
