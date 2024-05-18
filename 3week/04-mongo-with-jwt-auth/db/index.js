const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shashwat02infinity:oneodioPro10@cluster0.zrpbest.mongodb.net/authjwt"
  )
  .then(() => {
    console.log("connected to db");
  });

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Schema definition here
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  coursesPurchased: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  // Schema definition here
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);
const JWT_KEY = "shashwat";

module.exports = {
  Admin,
  User,
  Course,
  JWT_KEY,
};
