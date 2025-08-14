// import express from "express";
// import { createServer } from "http";
// import mongoose from "mongoose";
// import cors from "cors";
// import { connectToSocket } from "./controllers/socketManager.js"; // ✅ Your socket manager

// const app = express();
// const server = createServer(app);
// const io = connectToSocket(server); // ✅ Connect Socket.IO

// app.set("port", process.env.PORT || 8000);

// // ✅ Middleware
// app.use(cors());
// app.use(express.json({ limit: "40kb" }));
// app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// // ✅ Routes
// app.get("/home", (req, res) => {
//   return res.json({ message: "Welcome to the home page!" });
// });

// // ✅ Start Server
// const start = async () => {
//   try {
//     const connectionDb = await mongoose.connect(
//       "mongodb+srv://navinkashyap2001:TgKL3qUttVwe0PFZ@cluster0.qq24n10.mongodb.net/"
//     );

//     console.log(`✅ MongoDB connected at: ${connectionDb.connection.host}`);

//     server.listen(app.get("port"), () => {
//       console.log(`🚀 Server running at http://localhost:${app.get("port")}`);
//     });
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err.message);
//     process.exit(1);
//   }
// };

// start();




// app.js

import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server); // ✅ Socket.IO connected

app.set("port", process.env.PORT || 8000);

// ✅ Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// ✅ Routes
app.get("/home", (req, res) => {
  return res.json({ message: "Welcome to the home page!" });
});

// ✅ Start Server
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://navinkashyap2001:rvHQueCyXQhS2fyT@cluster0.qq24n10.mongodb.net/"
    );

    console.log(`✅ MongoDB connected at: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`🚀 Server running at http://localhost:${app.get("port")}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

start();
