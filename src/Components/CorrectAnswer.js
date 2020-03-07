import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {SetPoint} from "../Redux/Actions/PointActions";
import Lottie from "react-lottie";
import * as correct from "../Animations/11774-correctanswer";
import {Redirect} from "react-router-dom";
import {setMessage} from "../Redux/Actions/QuestionActions";
class CorrectAnswer extends Component {

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

        },1800)

    }

    back=()=>{

       // this.props.message('QUESTION');
        this.props.history.goBack();

    }

    render() {

        if(this.props.number ===10){

            this.props.message('COMPLETED');

        }
        if(this.props.number === 10) return <Redirect to='/over'/>
        if(this.props.msg !== 'TRUE') return <Redirect to='/'/>

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: correct.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className='correct'>
                <Lottie className='animation' options={defaultOptions} height={240} width={240} isPaused={this.state.isPaused} />
                <h1 className='true-main'>CORRECT!</h1>
                <p className='true-body'>YOU EARNED {this.props.location.state.round} POINTS</p>
                <p className='true-body'>TOTAL : {this.props.point}</p>
                <button className='continue-btn' onClick={this.back}>GO ON !</button>
            </div>
        );
    }
}
export function mapStateToProps(state) {

    return{
        point : state.PointReducer,
        number : state.NumberReducer,
        msg : state.MessageReducer
    }

}
function mapDispatchToProps(dispatch) {

    return{

        set : bindActionCreators(SetPoint,dispatch),
        message : bindActionCreators(setMessage,dispatch)

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(CorrectAnswer);