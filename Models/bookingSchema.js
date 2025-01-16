const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  days: {
    type: Number,  
    required: true,
  },
  date: {
    type: Date,  
    required: true,
  },
  peoples: {
    type: Number,  
    required: true,
  },
});

const bookings = mongoose.model('bookings', bookingSchema);

module.exports = bookings;