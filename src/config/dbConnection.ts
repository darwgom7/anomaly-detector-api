import mongoose from "mongoose";
import config from "./dbConfig";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURL as any, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
