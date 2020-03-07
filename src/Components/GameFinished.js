import React, {Component} from 'react';
import Lottie from "react-lottie";
import * as over from "../Animations/over";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {resetPoint} from "../Redux/Actions/PointActions";
import {restart, setMessage} from "../Redux/Actions/QuestionActions";
import {resetCounter} from "../Redux/Actions/JokerActions";
import {Redirect} from "react-router-dom";


class GameFinished extends Component {

    restart=()=>{

        this.props.reset();
        this.props.restart();
        this.props.increase();
        this.props.message('RESTART');
        this.props.history.push('/');

    }

    render() {

        if(this.props.msg !== 'COMPLETED') return <Redirect to='/'/>

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: over.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <div className='game-finish'>
                <Lottie options={defaultOptions} height={360} width={360}/>
                <h1 className='over-main'>CONGRATS !</h1>
                <p className='over-body'>GAME IS COMPLETED</p>
                <p className='over-body'>TOTAL POINTS : {this.props.point} </p>
                <button className='start-btn' onClick={this.restart}>RESTART</button>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return{

        point : state.PointReducer,
        msg : state.MessageReducer

    }

}
function mapDispatchToProps(dispatch) {

    return{
        reset :bindActionCreators(resetPoint,dispatch),
        restart : bindActionCreators(restart,dispatch),
        increase : bindActionCreators(resetCounter,dispatch),
        message :bindActionCreators(setMessage,dispatch)
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(GameFinished);