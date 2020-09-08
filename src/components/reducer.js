import {ADD,SUB,EVEN} from './action_type'
let initNumber = 1
export  function reducer(state = 1,action){

  let {type,data} = action
  let value
  switch (type) {
    case ADD:
      value = state+data*1
      break;
    case  SUB:
      value = state-data*1
      break
    case EVEN:
        if(data % 2 ===1){
           value = state + data*1
        }else{
          value  = state
        }
      break
    default:
       return state
  }
  return value
}

