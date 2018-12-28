console.log('Starting app');

setTimeout(() =>{
  console.log('in timeout 1');
},2000);

setTimeout(() =>{
  console.log('in timeout 2');
},0);

console.log('Finished');
console.log('Finished');
console.log('Finished');
