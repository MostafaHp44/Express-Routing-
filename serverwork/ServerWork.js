const express=require('express')
const app=express();
const path=require('path')
var port = 4000;
app.use(express.static('work'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'../work/Homepage.html'))

})
app.get('/home',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'../work/Homepage.html'))

})

app.get('/services',(req,res)=>{
   
    res.sendFile(path.join(__dirname,'../work/OurServices.html'))

})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../work/Contactus.html'))
})

app.listen(port,() => {
  console.log('Server is RUNNIG ....!!!')
})



