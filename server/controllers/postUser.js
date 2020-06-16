const postUserQuery = require("../database/queries/addUsers");
exports.postUser = (req, res) => {
   try{
  const userInfo = { 
    username: req.body.username, 
    email: req.body.email,
    password: req.body.password,
  };
  postUserQuery(userInfo);
  res.status(200).json({ message: "user  created succefully" }); 
}
 catch(err){
      res.status(400).json({message:"There is no valid information"})
  }

};
