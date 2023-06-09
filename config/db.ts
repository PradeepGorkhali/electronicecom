import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/Ecom`, {});

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error : ${error}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
