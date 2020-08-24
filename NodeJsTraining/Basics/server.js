const express=require('express');
const bodyParser=require('body-parser');
const app=express();



/// Middle Ware (Important concept!)

// app.use((req,res,next)=>{
// 	console.log('<h1>Hello</h1>');
// 	next();
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
	res.send("getting root");
}) 

app.get('/profile',(req,res)=>{
	res.send("getting profile");
})

app.post('/profile',(req,res)=>{
	console.log(req.body);
	const user={
		name:'sally',
		hobby:'soccer'
	}
	res.send('Success');
})

app.listen(3000);