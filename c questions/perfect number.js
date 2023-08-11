let number =6;
let sum =0;
for(let i=1;i<number;i++){
    if(number%i==0){
    sum = sum+i;
    }
}
if(sum ===number){
console.log(true)
}else{
console.log(false)
}