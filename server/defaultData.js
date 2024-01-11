import Product from "./model/Product.js";
import { products } from "./utils/constant.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Default data inserted successfully :-)");
  } catch (err) {
    console.log("Error while inserting default data: ", err.message);
  }
};

export default DefaultData;
