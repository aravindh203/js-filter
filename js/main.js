let array=[200,300,500,700,600,1200,1400];
console.log(array);
let a=array.filter(function(value){
    return value>=500 && value<=1000;
})
console.log(a);