import CentralStore from "./CentralStore";

export function NumberReducer(state = CentralStore.number,action) {

    let newState;

    if(action.type === 'PASSED'){

        return (newState = state+action.payload);

    }else if(action.type === 'RESTART'){

        return action.payload;

    }else if(action.type === 'RESET_NUM'){

        return action.payload;

    }else{

        return state;

    }

}

export default NumberReducer;