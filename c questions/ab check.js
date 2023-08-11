//mind path company question

// # Have the function ABCheck(str) take the str parameter being passed and return
// # the string true if the characters a and b are separated by exactly 3 places
// # anywhere in the string at least once (ie. "lane borrowed" would result in
// # true because there is exactly three characters between a and b). Otherwise
// # return the string false.

function ABCheck(str) { 
  
    for (var i = 0 ; i < str.length-4 ; i++)
    {
      if (str[i].match(/[abAB]/))
      {
        if (str[i].match(/[aA]/)){
            if(str[i+4].match(/[bB]/)){
          return true;
        }
        }else if(str[i+4].match(/[aA]/)){
                return true;
              }
        }
      }
  
    // code goes here  
    return false; 
           
  }

  let str="aefabai"
console.log(ABCheck(str))