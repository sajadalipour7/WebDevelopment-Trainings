const fs=require('fs');

fs.readFile('./q1Text.txt',(err,data)=>{
	const directions=data.toString();
	const directionsArray=directions.split('');
	let accumulator=0;
	let counter=0;
	const answer=directionsArray.some((currentItem)=>{
		if(currentItem==='('){
			accumulator+=1
		}else if(currentItem===')'){
			accumulator-=1
		}
		counter++;
		return accumulator<0;
	})
	console.log('basement entered at: ',counter)
});