import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

//to get all products to the front-end from the db.
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

//to feed data to our db from the data.js json file.
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //   await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

//to get product using their id.
//since this has a url params '/:id', if you define this route above the '/seed' route, 'id' will be treated as 'seed'.
//so, always write url params paths at the last.
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
