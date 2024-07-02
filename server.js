const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://abhijnarao11:abhi1128@cluster0.dmdrozp.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
