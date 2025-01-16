const packages=require('../Models/packageSchema')

//add package logic
exports.addPackage=async(req,res)=>{
    const{place,days,facilities,rate}=req.body
    const photo=req.file.filename
    

    // Create new package
    try{
    
    const newPackage = new packages({
        place,
        days,
        facilities,
        rate,
        photo,  // Store the filename of the uploaded image
      })

      // Save the new package to the database
      await newPackage.save();
            res.status(201).json({ message: 'Package added successfully', package: newPackage });
    
    
  } catch (error) {
    console.error('Error adding package:', error);
    res.status(500).json({ message: 'Error adding package', error: error.message });
  }
}
//get Packages
exports.getPackages=async(req,res)=>{
  const searchKey = req.query.search

    const query ={
        place:{
            $regex:searchKey,
            $options:'i'
        }
    }
  
  try{
       const response=await packages.find(query)
       res.status(200).json(response)
  }
  catch(err){
      res.status(402).json(err)
  }
}

exports.getAllPackage=async(req,res)=>{
  
  
  try{
       const response=await packages.find()
       res.status(200).json(response)
  }
  catch(err){
      res.status(402).json("Error",err)
  }
}

//edit package
exports.updatePackage=async(req,res)=>{
  const{place,days,facilities,rate,photo}=req.body
  const updateImg=req.file?req.file.filename :photo
  const userId=req.payload
  const {packageId}=req.params

  try{
      const updatePackage = await packages.findByIdAndUpdate({_id:packageId},{place:place,days:days,facilities:facilities,rate:rate,photo:updateImg})
      await updatePackage.save()
      res.status(200).json(updatePackage)
  }
  catch(err){
      res.status(500).json(err)
  }
}

//delete a project
exports.deletePackage=async(req,res)=>{
  const {packageId}=req.params
  try{
      const response=await packages.findByIdAndDelete({_id:packageId})
      res.status(200).json('Deleted succesfully')
  }
  catch(err){
      res.status(402).json("Error",err)
  }
}

