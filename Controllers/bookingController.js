const bookings = require('../Models/bookingSchema');

// Add booking logic
exports.addBooking = async (req, res) => {

  const { name, phone, place, days, date, peoples } = req.body;

  console.log(req.body);
  // Create new booking
  try {
    const book = new bookings({
      name,
      phone,
      place,
      days,  
      date,    
      peoples 
    });

   
    await book.save();
    res.status(201).json({ message: 'Booked successfully' });
  } catch (error) {
    console.error('Error adding booking:', error);
    res.status(500).json({ message: 'Error adding booking', error: error.message });
  }
};
//get Bookings
exports.getBooking=async(req,res)=>{
  
  
  try{
       const response=await bookings.find()
       res.status(200).json(response)
  }
  catch(err){
      res.status(402).json("Error",err)
  }
}
