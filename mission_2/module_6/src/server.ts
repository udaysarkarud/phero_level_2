import mongoose from "mongoose";
import { app } from "./app";

const port = 7000;

async function main() {
  try {
    //db connect
    await mongoose.connect("mongodb://127.0.0.1:27017/plm2");
    console.log("db connected");

    //app listening after db connect
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
