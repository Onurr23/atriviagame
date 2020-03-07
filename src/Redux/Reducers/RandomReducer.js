 import CentralStore from "./CentralStore";

export function RandomReducer(state= CentralStore.randomized,action) {

    let newState;

    if(action.type === 'RANDOMIZED'){

        return (newState = action.payload.sort(function(a, b){return 0.5 - Math.random()}))

    }else {

        return state;

    }

}

export default RandomReducer;