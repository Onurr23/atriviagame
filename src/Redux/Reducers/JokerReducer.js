import CentralStore from "./CentralStore";
export function JokerReducer(state=CentralStore.eliminated,action) {

    let newState;

    if(action.type === 'JOKER'){

        return(newState=action.payload.splice(0,2))

        console.log(newState);

    }else{

        return state;
    }

}

export default JokerReducer;