const initialstate=0;
const  changethenumber= (state=initialstate,action) => {  //state=0 direct likh sakte hai
  switch(action.type){
    case "INCREMENT": return state + action.deepak 
    case "DECREMENT": return state-1
    default: return state;
  }
  
}

export default changethenumber;

//give us new state

// reducer return the new state
