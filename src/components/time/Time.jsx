import React from 'react';

var time = new Date();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
var hours = time.getHours();
var _this = this;
var amPm = time.getHours() > 12 ? "PM" : "AM";
minutes = minutes < 10 ? "0"+ minutes : minutes;
seconds = seconds < 10 ? "0"+ seconds : seconds;
hours = hours < 10 ? "0"+ hours : hours;
hours = hours > 12 ? hours - 12 : hours;

class Time extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        amPm: amPm,
      }
    }
    componentDidMount(){
        _this = this;
  
       setInterval(function(){
            time = new Date();
            minutes = time.getMinutes();
            seconds = time.getSeconds();
            hours = time.getHours();
            minutes = minutes < 10 ? "0"+ minutes : minutes;
            seconds = seconds < 10 ? "0"+ seconds : seconds;
            hours = hours < 10 ? "0"+ hours : hours;
            hours = hours > 12 ? hours - 12 : hours;
            hours = hours == 0 ?  12 : hours;
            _this.setState({
                minutes: minutes,
                seconds: seconds,
                hours: hours,
                amPm: amPm
            })
      },1000);
    }
   
    render() {
      return (
        <div>
            <h4>{this.state.hours}:{this.state.minutes}:{this.state.seconds} {this.state.amPm}</h4>
        </div>
      )
    }
  }

export default Time;