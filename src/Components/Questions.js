import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {passQuestion, setMessage} from "../Redux/Actions/QuestionActions";
import {resetPoint, SetPoint} from "../Redux/Actions/PointActions";
import {decreaseCounter, useJoker} from "../Redux/Actions/JokerActions";
import {setTimer,restartTime} from "../Redux/Actions/TimerActions";
import {Link, Redirect} from "react-router-dom"
import "../CSS/App.css"
import Lottie from "react-lottie";
import * as correct from "../Animations/6640-times-up";
import randomize from "../Redux/Actions/RandomActions";

class Questions extends PureComponent {

    state ={

        myTimer : null,
        isPaused : false,
        random : true,
        newCorrect :this.props.location.state.questions[this.props.number].correct_answer,
        newIncorrect : this.props.location.state.questions[this.props.number].incorrect_answers,
        newTotal : ['1','2']

}
    componentDidMount() {

        let total = this.state.newCorrect + "," + this.state.newIncorrect;
        let news = total.split(',');
        this.props.random(news);
        this.timer();

    }
    stopAnimation=()=>{

        setTimeout(()=>{

            this.setState({
                isStopped:true
            })

        },2500)

    }

    answer=(correct,answer)=>{

        clearInterval(this.state.myTimer);

        this.props.reset();

        if(correct === answer){

            this.props.setMessage('TRUE');
            this.props.pass();
            this.props.set(100*this.props.time);
            this.props.history.push('/success',{time : this.props.time, round: 100*this.props.time })

        }else{

            this.props.setMessage('FALSE');
            this.props.set(0*this.props.time);
            this.props.history.push('/failed')

        }

    }
    timer=()=>{

     let time =15;

     this.state.myTimer = setInterval(()=>{

         time--;
         this.props.setTime(time);
         if(time===0){
             clearInterval(this.state.myTimer)
         }

     },1000)

    }

    useJoker=(incorrect)=>{

        let div = incorrect.length/2+1;
        let total = this.state.newCorrect + "," +incorrect.splice(div);
        let news = total.split(',');
        this.props.random(news);
        this.props.decrease();

    }
    timeIsUp=()=>{

        this.props.resetPoint();

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: correct.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        this.props.setMessage('FAILED');
        this.stopAnimation();
       return(
           <div className='time'>

               <Lottie options={defaultOptions} height={360} width={360} isPaused={this.state.isPaused} />
               <h1 className='over-main'>TIME IS UP</h1>
               <h1 className='over-body'>TOTAL POINTS : {this.props.point}</h1>
               <Link to='/' className='start-btn'>RESTART </Link>
           </div>
       )
    }
    render() {

        if(this.props.location.state === undefined) return <Redirect to='/'/>
        if(this.props.time === 0) return this.timeIsUp()
        if(this.props.message === 'FAILED') return <Redirect to='/'/>
        let current = this.props.location.state.questions[this.props.number];
        let correct = current.correct_answer;

    return (
        <div className='questions'>
                {
                    <div className='questions-body'>
                        <div className="question-text">
                            <h1 className='questions-main'>{current.question}</h1>
                        </div>
                        <ul className='question-items'>
                            {
                                this.props.randomla.map(question=>(
                                    <li key={question} onClick={()=>{this.answer(correct,question)}}>{question}</li>
                                ))
                            }
                        </ul>
                        {this.props.counter === 1 ? <button className='joker-btn' onClick={()=>this.useJoker(this.state.newIncorrect)}>Joker</button> : null  }
                    </div>
                }
        </div>
    );
}
}
function mapStateToProps(state) {

    return{

        number : state.NumberReducer,
        point : state.PointReducer,
        usedJoker: state.JokerReducer,
        counter : state.CounterReducer,
        time: state.TimerReducer,
        message : state.MessageReducer,
        jok : state.JokerReducer,
        randomla : state.RandomReducer
    }
}
function mapDispatchToProps(dispatch) {

    return{
        pass : bindActionCreators(passQuestion,dispatch),
        set : bindActionCreators(SetPoint,dispatch),
        joker : bindActionCreators(useJoker,dispatch),
        decrease : bindActionCreators(decreaseCounter,dispatch),
        setTime : bindActionCreators(setTimer,dispatch),
        reset : bindActionCreators(restartTime,dispatch),
        setMessage : bindActionCreators(setMessage,dispatch),
        resetPoint : bindActionCreators(resetPoint,dispatch),
        random : bindActionCreators(randomize,dispatch)

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Questions);