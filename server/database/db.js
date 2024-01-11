import mongoose from "mongoose";

const Connection = async (MONGO_DB_USERNAME, MONGO_DB_PASSWORD) => {
  try {
    const URL = `mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@ac-dy35jpg-shard-00-00.g52wqhj.mongodb.net:27017,ac-dy35jpg-shard-00-01.g52wqhj.mongodb.net:27017,ac-dy35jpg-shard-00-02.g52wqhj.mongodb.net:27017/?ssl=true&replicaSet=atlas-d5x46a-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected with MongoDB Database Successfully :-)");
  } catch (error) {
    console.log("Error in connection with DB :-( ", error.message);
  }
};

export default Connection;
