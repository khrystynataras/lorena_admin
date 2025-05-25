import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true)

  if (isConnected) {
    console.log("MongoDB вже підключено");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Lorena_admin"
    })

    isConnected = true;
    console.log("MongoDB підключено");
  } catch (err) {
    console.log(err)
  }
}