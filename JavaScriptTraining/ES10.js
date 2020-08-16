const array=[1,[2,3],[4,5]];
array.flat()

//two layers
const array2=[1,2,[3,4,[5]]];
array2.flat(2);

const entries=['bob','sally',,,,,'cindu'];
entries.flat();

//flats and map 1 layer
const jurasicParkChaos=array2.flatMap(creature=>creature+'R');

//trimming
const userEmail='          eddythedsfsd@gmail.com';
const userEmail2='jdsofjds@gmail.com            ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//fromEntries
userProfiles=[['commanderTom',23],['derekZlander',40],['hansel',18]];
const obj=Object.fromEntries(userProfiles);
Object.entries(obj);

//try and catch block
try{
	4+sdfsd
}catch{
	console.log("you messed up",error);
}