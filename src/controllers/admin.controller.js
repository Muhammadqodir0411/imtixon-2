import { read, write } from "../utils/model.js";
import jwt from "../utils/jwt.js";

const LOGIN = (req, res, next) => {
  
  try {
    const admins = read("admin");
    const { username, password } = req.body;
    const admin = admins.find(
      (admin) =>
        admin.admin_username == username && admin.password == password
    );
    if (!admin) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    res.status(200).json({
      status: 200,
      message: "Success",
      access_token: jwt.sign({ username: admins.admin_id }),
    });
  } catch (error) {
    console.log(error.message);
  }
};

const addPost = (req, res, next)=> {
  try {
    
    const body = req.body


  } catch (error) {
    console.log(error.message);
    
  }
}


const ACTIVATE = (req, res, next) => {
  const { access_token } = req.headers;

  const { ids } = req.query;

  const pending = read("pending");
  const active = read("active");
  const activated = "active";

  const data = pending.filter((master) => {
    const byId = ids ? master.id == ids : true;
    return byId;
  });

  const activate = active.filter((master) => {
    const byId = ids ? master.id == ids : true;
    return byId;
  });


  if (!activate[0]) {
    const newData = {
      id: data[0].id,
      name: data[0].name,
      description: data[0].description,
      image: data[0].image,
      type: data[0].type,
      date: data[0].date,
      time: data[0].time,
      internal_direction: data[0].internal_direction,
      adress: data[0].adress,
      phone_number: data[0].phone_number,
      email: data[0].email,
      website: data[0].website,
      direction: data[0].direction,
      status: activated,
      created_at: data[0].created_at,
    };

    write("active", [...active, newData]);

    res.status(200).json({
      message: "add",
    });
  }

};

export default {
  LOGIN,
  ACTIVATE,
  addPost
};

