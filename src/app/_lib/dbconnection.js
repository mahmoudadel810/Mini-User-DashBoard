const { default: mongoose } = require("mongoose");

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/user-dashboard');
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}