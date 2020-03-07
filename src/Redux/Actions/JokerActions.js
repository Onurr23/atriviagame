export function useJoker(incorrect) {

    console.log(incorrect);

    return({type : 'JOKER',payload:incorrect})

}
export function decreaseCounter() {

    return({type : 'DECREASED',payload:0})

}
export function resetCounter() {
    return({type : 'INCREASED',payload : 1})
}
export default {useJoker,decreaseCounter,resetCounter};