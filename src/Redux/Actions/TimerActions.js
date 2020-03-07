export function setTimer(sn){

    return({type : 'TIMER_SET',payload :sn})

}
export function restartTime() {
    return({type : 'RESET_TIME',payload:15})
}

export default {setTimer,restartTime};