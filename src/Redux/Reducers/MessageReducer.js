import CentralStore from "./CentralStore";

export function MessageReducer(state=CentralStore.message,action) {

    if(action.type === 'SET_MESSAGE'){

        return action.payload;

    }else{

        return state;

    }

}

export default MessageReducer;