// const { MongoClient } = require('mongodb');

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    console.log(`intentando conectar con la base de datos en ${process.env.MONGO_DB}`);
    await mongoose.connect(process.env.MONGO_DB);
    console.log('The database is connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;