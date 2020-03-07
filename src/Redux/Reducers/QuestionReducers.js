
import CentralStore from "./CentralStore";

export function QuestionReducers(state = CentralStore.questions,action){

    if(action.type === 'QUESTIONS'){

        return action.payload;

    }else {

        return state;

    }



}

export default QuestionReducers;