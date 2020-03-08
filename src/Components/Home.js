import "../CSS/App.css";
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {getQuestions, resetNumber, setMessage} from "../Redux/Actions/QuestionActions";
import {connect} from "react-redux";
import getCategories from "../Redux/Actions/CategoryActions";
import {setTimer} from "../Redux/Actions/TimerActions";
import {resetPoint} from "../Redux/Actions/PointActions";
import * as correct from "../Animations/296-react-logo";
import Lottie from "react-lottie";

class Home extends Component {
    state = {

        category : 9,
        isStopped: false,
        difficulty: 'easy'

    }

    componentDidMount() {

        this.props.categories();
        this.props.message('QUESTION');
        this.props.setTime(15);
        this.props.setPoint();
        this.stopAnimation();
        this.props.getQuestions();
        this.props.resetNum();


    }

    stopAnimation=()=>{

        setTimeout(()=>{

            this.setState({
                isStopped:true
            })

        },3700)

    }

    changeHandler=(e)=>{
        
        this.props.getQuestions(e.target.value,this.state.category)

    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: correct.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        let gotCategories = this.props.rendered;
        return (
            <div className='home'>
                <Lottie options={defaultOptions} height={360} width={360} isPaused={this.state.isStopped} />
                    <h1 className='home-main'>TRIVIA GAME</h1>
                    <select name="difficulty" id="" onChange={this.changeHandler}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <select name="category" id="" value={this.state.category} onChange={(e) => {this.setState({category: e.target.value}); this.props.getQuestions(this.state.difficulty,e.target.value) }}>

                        {
                            gotCategories.map(category=>(
                                <option disabled={category.id === 13 || category.id === 19 || category.id === 24 || category.id === 25 || category.id === 29 || category.id === 30 ? true : false} key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }

                    </select>

                    <Link className='start-btn' to={{pathname : '/questions', state : {questions: this.props.questions }}}>START</Link>


            </div>
        );
    }
}
function mapStateToProps(state) {
    return{

        questions: state.QuestionReducers,
        rendered : state.CategoryReducer,

    }

}
function mapDispatchToProps(dispatch) {

    return{

        getQuestions : bindActionCreators(getQuestions,dispatch),
        categories : bindActionCreators(getCategories,dispatch),
        message : bindActionCreators(setMessage,dispatch),
        setTime : bindActionCreators(setTimer,dispatch),
        setPoint : bindActionCreators(resetPoint,dispatch),
        resetNum : bindActionCreators(resetNumber,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
