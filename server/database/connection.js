
const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/argentBankDB';

const connectDB = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, 
      useCreateIndex: true ,
    });
    console.log('Database successfully connected');
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};

module.exports = connectDB;
