const promise=new Promise((resolve,reject)=>{
	if(true){
		resolve('Stuff Worked');
	}else{
		reject('ERROR,it broke!');
	}
})

const promise2=new Promise((resolve,reject)=>{
	setTimeout(resolve,100,'AAAA');
})

const promise3=new Promise((resolve,reject)=>{
	setTimeout(resolve,1000,'BBBB');
})

const promise4=new Promise((resolve,reject)=>{
	setTimeout(resolve,4000,'CCCC');
})

Promise.all([promise,promise2,promise3,promise4])
.then(values=>{
	console.log(values);
})