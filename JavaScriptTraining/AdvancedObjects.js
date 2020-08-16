// reference type

var object1={value:10};
var object2=object1;
var object3={value:10};

// context vs scope

const object4={
	a:function(){
		console.log(this);
	}
}

// instantiation

class Player {
	constructor(name,type){
		console.log('player',this);
		this.name=name;
		this.type=type;
	}
	introduce(){
		console.log(`Hi I am ${this.name} , I'm a ${this.type}`);
	}

}

class Wizard extends Player{
	constructor(name,type){
		super(name,type);
		console.log('wizard',this);
	}
	play(){
		console.log(`WEEEEEEE I'm a ${this.type}`);
	}
}
const wizard1=new Wizard('a','b');
const wizard2=new Wizard('c','d');

//Cloning objects shallow level (sathi)
let obj={a:'a',b:'b'};
let clone=Object.assign({},obj);
let clone2={...obj};

obj.c=5;
console.log(obj);
console.log(clone);
console.log(clone2);

//Cloning objects deep level
let obj={a:'a',b:'b',c:{
	deep:'try and copy me'
}};
let clone=Object.assign({},obj);
let clone2={...obj};
let superClone=JSON.parse(JSON.stringify(obj));

obj.c.deep='hahahaaa';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
