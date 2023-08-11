/*
let str1="";
for(let i=0;i<=4;i++){

    for(let j=0;j<=4;j++){
    str1 = str1 + "*"
    }   
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
let str1="";
for(let i=0;i<=4;i++){
if(i==0 || i==4){
    for(let j=0;j<=4;j++){
    str1 = str1 + "*"
    }
}else{
    for(let j=0;j<=4;j++){
        if(j ==0 || j == 4){
        str1= str1 + "*"
        }else{
        str1= str1 + " "
        }
    }   
}   
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
let str1="";
let n=5
for(let i=1;i<=n;i++){
    for(let j=1;j<=(n-i);j++){
        str1 = str1 + " ";
    }   
    for(let k=1;k<=i;k++){
        str1 = str1 + "*";
    }   
        str1 = str1 + "\n";
}   
console.log(str1)
*/

/*
let str1="";
let n=5
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        str1 = str1 + "*";
    }   
        str1 = str1 + "\n";
}   
console.log(str1)
*/

/*
let str1="";
let n=5
for(let i=1;i<=n;i++){
    for(let j=0;j<=(n-i);j++){
        str1 = str1 + "*";
    }   
        str1 = str1 + "\n";
}   
console.log(str1)
*/
/*
let str1 = "";
for (let i = 0; i <= 5; i++) {
    if (i == 0 || i == 1 || i == 5) {
        for (let j = 0; j <= i; j++) {
            str1 = str1 + "*"
        }
    } else {
            if (i == 2) {
                for (let k = 0; k <= 2; k++) {
                 if(k==0 || k==2){
                    str1 = str1 + "*"
                 }else{
                    str1 = str1 + " "
                 }   
                }
            }else if(i == 3){
                for (let l = 0; l <= 3; l++) {
                    if(l==0 || l==3){
                       str1 = str1 + "*"
                    }else{
                       str1 = str1 + " "
                    }   
                   }
            }else{
                for (let m = 0; m <= 4; m++) {
                    if(m==0 || m==4){
                       str1 = str1 + "*"
                    }else{
                       str1 = str1 + " "
                    }   
                   }
            }
        }
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
//easy way uparwala
let str1 = "";
for (let i = 0; i <= 5; i++) {
    if (i == 0 || i == 1 || i == 5) {
        for (let j = 0; j <= i; j++) {
            str1 = str1 + "*"
        }
    } else {
            
                for (let k = 0; k <= i; k++) {
                 if(k==0 || k==i){
                    str1 = str1 + "*"
                 }else{
                    str1 = str1 + " "
                 }   
                }
            }
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
let str1="";
for(let i=0;i<=4;i++){

    for(let j=0;j<=4;j++){
    str1 = str1 + "*"
    }   
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
let str1="";
let n=5
for(let i=1;i<=n;i++){
    for(let j=1;j<=(n-i);j++){
    str1 = str1 + " "
    }
    for(let k=1;k<=2*i-1;k++){
        str1 = str1 + "*"
        }
    str1 = str1 + "\n"
}
console.log(str1)
*/

/* normal star
let str1="";
let n=5
for(let i=1;i<=n;i++){
    for(let j=1;j<=(n-i);j++){
    str1 = str1 + " "
    }
    for(let k=1;k<=i;k++){
        str1 = str1 + "* "
        }
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
let str1="";
let n=5
for(let i=1;i<=n;i++){
    for(let k=1;k<i;k++){
        str1 = str1 + " "
        }
    for(let j=1;j<=2 * (n-i) + 1;j++){
    str1 = str1 + "*"
    }
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
let str1="";
let n=5
for(let i=1;i<=n;i++){
    if(i == 5){
        for(let r=1;r<=9;r++){
            str1 = str1 + "*"
            }    
    }else{
        for(let k=0;k<n-i;k++){
            str1 = str1 + " "
            }
            let t =2 *i -1;
        for(let j=1;j<=t;j++){
            if(j== 1 || j == t){
             str1 = str1 + "*"
            }else{
                str1 = str1 + " "
            }
        }
    }
    str1 = str1 + "\n"
}
console.log(str1)
*/

/*
let str1="";
let n=5
for(let i=1;i<=n;i++){
    for(let j=1;j<= n-i;j++){
            str1 = str1 + " ";
            }    
    
        for(let k=1;k<=2*i -1;k++){
            str1 = str1 + "*"
            }
    str1 = str1 + "\n"
}
let t=4
for(let p=1;p<=t;p++){
    for(let i=1;i<=p;i++){
            str1 = str1 + " ";
            }    
    
        for(let k=1;k<=2*(t-p)+1;k++){
            str1 = str1 + "*"
            }
    str1 = str1 + "\n"
}

console.log(str1)
*/

//11 ,12,13,14,15
//like video
//visal imae