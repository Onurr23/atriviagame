import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {resetPoint} from "../Redux/Actions/PointActions";
import {restart, setMessage} from "../Redux/Actions/QuestionActions";
import {resetCounter} from "../Redux/Actions/JokerActions";
import Lottie from "react-lottie";
import * as correct from "../Animations/13865-sign-for-error-flat-style";
import {Redirect} from "react-router-dom";

class IncorrectAnswer extends Component {

    state={

        isPaused : false

    }
    componentDidMount() {
        this.stopAnimation();
    }

    stopAnimation=()=>{

        setTimeout(()=>{

            this.setState({
                isPaused:true
            })

        },1850)

    }

    previous=()=>{

        this.props.reset();
        this.props.restart();
        this.props.increase();
        this.props.message('RESTART');
        this.props.history.push('/');
    }

    render() {

        if(this.props.msg !== 'FALSE') return <Redirect to='/'/>

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: correct.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (

            <div className='incorrect'>

                <Lottie options={defaultOptions} height={240} width={240} isPaused={this.state.isPaused} />
                <h1 className='false-main'>GAME OVER</h1>
                <p className='false-body'>POINTS : {this.props.point}</p>
                <button className='restart-btn' onClick={this.previous}>RESTART</button>

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

export default connect(mapStateToProps,mapDispatchToProps)(IncorrectAnswer);