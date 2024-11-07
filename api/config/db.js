import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vraj:vraj@cluster0.odl3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DB Connected"));
};
