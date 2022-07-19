const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://Hiiu:Hieunguyenx24@cluster0.ozwelvg.mongodb.net/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
