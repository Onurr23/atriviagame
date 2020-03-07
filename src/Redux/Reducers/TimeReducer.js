import CentralStore from "./CentralStore";

export function TimerReducer(state=CentralStore.timer,action) {

    if(action.type === 'TIMER_SET'){

        return action.payload;

    }else if(action.type === 'RESET_TIME'){

        return action.payload;

    }else{

        return state;

    }

}
export default TimerReducer;