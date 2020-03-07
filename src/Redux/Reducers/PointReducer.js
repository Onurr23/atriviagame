import CentralStore from "./CentralStore";

export function PointReducer(state=CentralStore.point,action) {

    let newState;

    if(action.type === 'WON'){

        return(newState = action.payload+state)

    }else if(action.type === 'RESET'){

        return  action.payload;

    }else {

        return state;

    }

}

export default PointReducer;