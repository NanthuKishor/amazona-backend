import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((error) => console.log(error));

// URL API for displaying product page from db.
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found." });
//   }
// });

//using userRouter inside our server.js
app.use("/api/users", userRouter);
//using productRouter inside our server.js.
app.use("/api/products", productRouter);
//using orderrouter
app.use("/api/orders", orderRouter);

//since the .env file where the paypal 'clientId' is stored is in the backend, we have to define a route to send it to the frontend.
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.get("/", (req, res) => {
  res.send("server is ready ");
});

//error catcher middleware
//when ever there is a error any router which is wrapped in expressAsyncHandler, that error will be redirected to this middleware and it will be shown in our browser, instead of terminal getting screwed up.
//500 - is server error
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at localhost:${port} `);
});
