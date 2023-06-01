import fs from "fs";
import path from "path";


var accessLogStream = fs.createWriteStream(
  path.join(process.cwd(), "access.log"),
  {
    flags: "a",
  }
);

process.DEFAULT = {}
process.DEFAULT.pagination = {}
process.DEFAULT.pagination.limit = 10
process.DEFAULT.pagination.page = 1;


const PORT = process.env.PORT || 5000;
export { PORT, accessLogStream };
