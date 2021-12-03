import { createConnection } from "typeorm";

export const connectDb = async () => {
  let retries = 5;
  while (retries) {
    try {
      createConnection();
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      setTimeout(connectDb, 5000);
    }
  }
};
