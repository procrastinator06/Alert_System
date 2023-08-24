const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose'); // Import mongoose

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/TestDB');

// Define a schema for alerts
const alertSchema = new mongoose.Schema({
  title: String,
  time: String,
  date: String,
  type: String,
});

// Create a model based on the schema
const Alert = mongoose.model('Alert', alertSchema);

app.get('/page1', async (req, res) => {
  const alerts = await Alert.find();
  res.render('page1', { alerts });
});

app.get('/page2', async (req, res) => {
  const alerts = await Alert.find();
  res.render('page2', { alerts });
});

app.post('/create-alert', async (req, res) => {
  const { title, time, date, type } = req.body;

  try {
    const newAlert = new Alert({
      title,
      time,
      date,
      type,
    });

    await newAlert.save();
    console.log('Alert saved successfully:', newAlert);

    res.redirect('/page1');
  } catch (error) {
    console.error('Error saving alert:', error);
    res.status(500).send('Error saving alert');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
