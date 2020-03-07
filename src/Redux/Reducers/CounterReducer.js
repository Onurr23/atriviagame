import CentralStore from "./CentralStore";

export function CounterReducer(state=CentralStore.jokerCount,action) {

    if(action.type === 'DECREASED' || action.type === 'INCREASED'){

        return action.payload

    }else{

        return state

    }

}
export default CounterReducer;