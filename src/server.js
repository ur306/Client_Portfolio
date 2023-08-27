//dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')


//define the express operation
const app=express();
const port=3000;


//defining the cors -cross origin by reciving the data in json format
app.use(cors());
app.use(bodyParser.json())




//establish the connection with the dB
const db=mysql.createConnection({
host:'localhost',
user:'urmila',
password:'root',
database:'clientportfolio'
});




//verifying whether db is connected or not
db.connect(err=>{
if(err){
    console.error('connection is not established with the dB',err);
}
else{
    console.log('Connected to db')
}


});


app.listen(port,()=>{console.log('server port estbalished on 3000')})
app.get("/test",(req,res)=>{
  res.status(200).json({message:"works"})
})


//to insert clients into db
app.post('/addclients',(req,res)=>{
  const {name,email,address,password}=req.body;
  const sql='insert into clients values(?,?,?,?)';
  db.query(sql,[name,email,address,password],(err,result)=>{
      if(err){
          console.error('Error in adding the client',err);
          res.status(500).json({error:'An error occured'});
      }else{
          res.status(200).json({message:'client added successfully'});
      }


  });
  });


//to insert meeings into db
app.post('/addmeet',(req,res)=>{
  const {meetingtopic,NOofpeople,starttime}=req.body;
  const sql='insert into meetings values(?,?,?)';
  db.query(sql,[meetingtopic,NOofpeople,starttime],(err,result)=>{
      if(err){
          console.error('Error in adding the meeting',err);
          res.status(500).json({error:'An error occured'});
      }else{
          res.status(200).json({message:'Meeting added successfully'});
      }


  });
  });


