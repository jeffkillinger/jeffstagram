// reducer takes in 2 things --
//1: action (inf about what happened)
//2: copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
