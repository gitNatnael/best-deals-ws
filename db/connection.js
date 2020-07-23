const mongoose = require("mongoose");
const URI =
  "mongodb+srv://nati:natnael1983@words.wbx5o.mongodb.net/sve-amh?retryWrites=true&w=majority";
const connectDb = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = connectDb;
