// mindpath company question
// function gcd(p,q) { 
//     if (p == 0) {
//        return q; 
//     }
  
//     if (q == 0){
//        return p; 
//     } 

//     if (p == q){
//        return p; 
//     } 
    
//     if (p > q){
//        return gcd(p-q, q);   
//     } 
//     else{
//      return gcd(p, q-p); 
//     }
//  } 
//     let p = 98, q = 56; 
//     console.log("GCD of %d and %d is %d ", p, q, gcd(p, q));  
//     console.log( p, q)

function gcd(p,q) { 
   let a=Math.min(p,q)

   while(a>0){
      if(p%a == 0 && q%a == 0){
         return a
      }
      a--
   }
} 
   let p = 98, q = 56; 
   console.log(gcd(p, q));     

   // start with 1 to infinity