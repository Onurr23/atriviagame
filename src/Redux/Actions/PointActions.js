export function SetPoint(point){


    return({type : 'WON',payload : point})

}

export function resetPoint() {

    return({type : 'RESET',payload : 0})

}

export default {SetPoint,resetPoint};