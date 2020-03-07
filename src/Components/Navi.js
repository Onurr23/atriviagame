import React, {Component} from 'react';
import "../CSS/App.css"
import {connect} from "react-redux";

class Navi extends Component {

    render() {
        return (
            <div className='navi'>
                <div className="question">
                 Questions :   {this.props.message !== 'COMPLETED' ? this.props.number+1 : 10}/10
                </div>
                <div className="point">
                    {this.props.point} Point
                </div>
                <div className="time">
                    Remaining Time : {this.props.time}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return{
        time : state.TimerReducer,
        number : state.NumberReducer,
        point: state.PointReducer,
        message : state.MessageReducer
    }
}
export default connect(mapStateToProps)(Navi);