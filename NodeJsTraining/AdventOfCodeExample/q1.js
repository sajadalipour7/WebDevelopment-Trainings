const fs=require('fs');

fs.readFile('./q1Text.txt',(err,data)=>{
	console.time('a');
	/// Andrei's Way
	const directions=data.toString();
	const directionsArray=directions.split('');
	const answer=directionsArray.reduce((acc,currentValue)=>{
		if(currentValue==='('){
			return acc+=1
		}else if(currentValue===')'){
			return acc-=1
		}
	},0)

	/// My Way
	// let answer=0;
	// const directions=data.toString();
	// for (char of directions){
	// 	(char==='(')?answer++:answer--;
	// }
	console.timeEnd('a');
	console.log(answer);

})
