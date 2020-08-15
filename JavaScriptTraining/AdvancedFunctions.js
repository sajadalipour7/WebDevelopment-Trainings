const first=()=>{
	const greet='Hi';
	const second=()=>{
		alert(greet);
	}
	return second;
}
const newFunc=first();
newFunc();

//Closures : a function ran . the function executed .
//its never going to execute again but it's going to remember thera are 
// refrences to those vvariables so the child scope always has access to the parent scope.

//Currying
const multiply=(a,b)=>a*b;
const curriedMultiply=(a)=>(b)=>a*b;
const multiplyBy5=curriedMultiply(5);
multiplyBy5(2); //10

//Compose
const compose=(f,g)=>(a)=>f(g(a));
const sum=(num)=>num+1;
compose(sum,sum)(5);

//Avoiding side effects , functional purity