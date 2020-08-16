const basket=['sdf','werw','trhrt'];

//Old
basket.forEach(item=>{
	console.log(item);
})

//New 1 (for of)
//Iterating - arrays , strings
for(item of basket){
	console.log(item);
}

//New 2 (for in)
//For Obejct we do enumerating not iterating
//Enumerating is for Objects
const detailedBasket={
	apples:5,
	oranges:10,
	grapes:1000
};

for(item in detailedBasket){
	console.log(item);
}

//debugger
debugger;