import {combineReducers} from "redux";
import QuestionReducers from "./QuestionReducers";
import NumberReducer from "./NumberReducer";
import PointReducer from "./PointReducer";
import JokerReducer from "./JokerReducer";
import CounterReducer from "./CounterReducer";
import CategoryReducer from "./CategoryReducer";
import TimerReducer from "./TimeReducer";
import MessageReducer from "./MessageReducer";
import RandomReducer from "./RandomReducer";

const rootReducer = combineReducers({

    QuestionReducers,
    NumberReducer,
    PointReducer,
    JokerReducer,
    CounterReducer,
    CategoryReducer,
    TimerReducer,
    MessageReducer,
    RandomReducer

})

export default rootReducer;