import axios from "axios";

export function getQuestions(difficulty,category) {

    return(dispatch)=>{


        let url;

        if(difficulty){


            url = 'https://opentdb.com/api.php?amount=10&category='+category+'&difficulty='+difficulty+'&type=multiple'

        }else {

            url  = 'https://opentdb.com/api.php?amount=10&category'+category+'&difficulty=hard&type=multiple'

        }

        axios.get(url).then(response=>{

            dispatch({type : 'QUESTIONS', payload : response.data.results})

        })


    }

}

export function passQuestion() {

    return({type : 'PASSED', payload : 1})

}

export function restart() {

    return({type : 'RESTART',payload :0})

}

export function setMessage(msg) {
    return({type : 'SET_MESSAGE',payload:msg})
}
export function resetNumber() {
    return({type : 'RESET_NUM',payload:0})
}

export default {getQuestions,passQuestion,restart,setMessage,resetNumber};