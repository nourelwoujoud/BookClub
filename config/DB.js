const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:<admin>@cluster0.wpfx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
      {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});