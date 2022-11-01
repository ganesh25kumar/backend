const express=require('express');
const app=express();
const port =3000;
app.listen(port,()=>{
    console.log(`server is listening in port:${port}`)
})
app.get('/',(req,res)=> {
    res.send("Hello World");
});
app.get('/aboutus',(req,res)=>{
    res.send("This information from About Us");
})