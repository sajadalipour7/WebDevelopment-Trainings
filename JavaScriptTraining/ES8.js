'Turtle'.padStart()
'Turtle'.padEnd()

//Ending comma only for prettiness
const fun=(
	a,
	b,
	c,
	d,
	)=>{
	console.log(a);
}
fun(1,2,3,4,);

Object.values
Object.entries
Object.keys

let obj={
	username0:'Santa',
	username1:'Ssdfds',
	username2:'dfgfdg',
}

//Old version
Object.keys(obj).forEach((key,index)=>{
	console.log(key,obj[key]);
});
Object.values(obj).forEach(value=>{
	console.log(value);
});

//ES8 version
Object.entries(obj).forEach(i=>{
	console.log(i);
});

Object.entries(obj).map(value=>{
	return value[1]+value[0].replace('username','');
});

//Async Await