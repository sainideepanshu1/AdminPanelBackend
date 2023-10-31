const users = require('../Module/UserSchema.js');
const deep = require('../Module/CreateSchema.js');






// for add category
module.exports.Entercategory= async (req,res) =>{
    console.log(req.body,"req-----"    );
    
    const deepData = await deep.create(req.body);

    if(deepData){
        res.status(201).send({
            status:"success",
            message:"addcategory  Successfull",
            data:deepData
        });
    } else{
        res.status(504).send({
            status:"Error",
            error:error.message
        });
    }
}
// for  add category datafectch  then----collection is deep
module.exports.fetchdeepData = async (req, res) => {
  const deepData = await deep.find();
  if (deepData) {
    res.status(200).send({
      status: "success",
      data: deepData,
    });
  } else {
    res.status(500).send({
      status: "Error",
      error: error.message,
    });
  }
};
// for delete data--deep
module.exports.deepdelete = async(req, res)=>{
    console.log("This is req.params.id",req.params)
    const deepData = await deep.findByIdAndDelete(req.params.id);

    if (deepData) {
      return res.status(408).json({ error: 'User not found' });
    }
    
    res.json({ message: 'Data deleted successfully', deep: deep });


};











// For adding Test details 
module.exports.Entersubcategory = async (req, res) => {
  console.log(req.body, "req----- subcategory");
  const User = await users.create(req.body);
  if (User) {
    res.status(200).send({
      status: "success",
      message: "Entery  Successfull",
      data: User,
    });
  } else {
    res.status(500).send({
      status: "Error",
      error: error.message,
    });
  }
};

    // for  testdata datafectch  then----collection is users
module.exports.fetchTestData = async(req, res)=>{
    const User = await users.find();

    if(User){
        res.status(200).send({
            status:"success",
            data:User
        });
    }else{
        res.status(505).send({
            status:"Error",
            error:error.message
        });
    }

}


// for delete data--users
    module.exports.Datadelete= async(req, res)=>{
        console.log("This is req.params.id",req.params)
        const User = await users.findByIdAndDelete(req.params.id);

        if (User) {
          return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ message: 'Data deleted successfully', user: User });

    
  };



  

