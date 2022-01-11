import React, {useState,useEffect,useLayoutEffect} from 'react'
import { compareAsc, format } from 'date-fns'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'
import StatusCard from '../components/status-card/StatusCard'

import Delay from '../components/delay/Delay'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import Chartpie from '../components/chart/Chartpie'
import Chartcount from '../components/chart/Chartcount'
import '../components/delay/delay.css'
import Chartcount_speed from '../components/chart/Chartcount_speed';

let t = 0;


const DashboardA = () => {
    const [isActive, setIsActive] = useState(true);
    const[timer,settimer]=useState(60000);
    // const[intervalID, setintervalID]=useState("");

    // const func_intervalId = setInterval(() => {
    //     t++;
    //         if(t!==0){
    //             if(t===2){
    //                 t=0;
    //             }
    //                 setstateTrig(t);
    //                 console.log(t)
    //                 console.log(stateStatus)
                
    //         }
    // }, 1000);

    // setintervalID(); 

    // var refresh_minute = setInterval(myLoop,5000);

    // function myLoop(){
        
    //     // setTimeout(function(){
    //         t++;
    //         if(t!==0){
    //             if(t===2){
    //                 t=0;
    //             }
    //                 setstateTrig(t);
    //                 console.log(t)
    //                 console.log(stateStatus)
                
    //         }
    //     // },1000)
        
        
    // }

    

    const axi ={
        headers:{
          "Access-Control-Expose-Headers":"Access-Control-*",
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Access-Control-*, Origin, X-Requested-With, Content-Type, Authorization",
          "Allow":"GET, POST, PUT, DELETE, OPTIONS, HEAD",
        //   "Authorization":`${cookies.Token}`
          }
        // console.log(`ok auth ${cookies.Token}`)
    }

    // const[stateStatusDate,setstateStatusDate]=useState(`minutes?startdate=`+format(value[0], 'ddMMyyyy-HH:mm:ss')+`&enddate=`+format(value[1], 'ddMMyyyy-HH:mm:ss'));
    const[stateStatusDate,setstateStatusDate]=useState(0)
    const[stateStatus,setstateStatus]=useState("minutes");
    const[stateTrig,setstateTrig]=useState(0);
    const[stateStatus_minute,setstateStatus_minute]=useState(true);
    const[stateStatus_hour,setstateStatus_hour]=useState(false);
    const[stateStatus_day,setstateStatus_day]=useState(false);
    const[value, onChange] = useState([new Date(), new Date()]);
    const[statusDate, setstatusDate] = useState(false);

    const toggleMinute = () => {
        setstateStatus_minute(true);
        setIsActive(true);
        setstateStatus_hour(false);
        setstateStatus_day(false);
        setstateStatus(`minutes`); //?startdate=30122021-00:00:00&enddate=30122021-02:03:00
        // setstateStatusDate(`minutes?startdate=`+format(value[0], 'ddMMyyyy-HH:mm:ss')+`&enddate=`+format(value[1], 'ddMMyyyy-HH:mm:ss'));
        settimer(60000);
        console.log('minute');
       
    }
    const toggleHour = () => {
        setstateStatus_minute(false);
        setIsActive(true);
        setstateStatus_hour(true);
        setstateStatus_day(false);
        setstateStatus("hours");
        // setstateStatusDate(`hours?startdate=`+format(value[0], 'ddMMyyyy-HH:mm:ss')+`&enddate=`+format(value[1], 'ddMMyyyy-HH:mm:ss'));
        settimer(3600000)
        console.log('hour');
        
    }
    const toggleDay = () => {
        setstateStatus_minute(false);
        setIsActive(false);
        setstateStatus_hour(false);
        setstateStatus_day(true);
        setstateStatus("days");
        // setstateStatusDate(`days?startdate=`+format(value[0], 'ddMMyyyy-HH:mm:ss')+`&enddate=`+format(value[1], 'ddMMyyyy-HH:mm:ss'));
        console.log('day');
    }

    const chooseDate = (value) =>{
        setstatusDate(true);
        onChange(value)
    }
    
    useEffect(()=>{
        // console.log([format(value[0], 'ddMMyyyy-HHmmss'), format(value[1], 'ddMMyyyy-HHmmss')]);
        console.log(stateStatusDate)
        let intervalId;
            if (isActive) {
                intervalId = setInterval(() => {
                t++;
                setstateTrig(t);
                
                console.log(t)
                if(t=== 2){
                    t=0;
                }
                
                }, timer)
                
            }
      
          return () => clearInterval(intervalId);
          
        }, [isActive,timer,value, stateStatusDate])
        // myLoop();
        // if (stateStatus!=='minutes'){
        //     clearInterval(intervalID);
        // }

    // useLayoutEffect(() => {
    //     getData();
        
    // }, [])

    return (
        <div>
            <div className="row">
                <div className='col-6'>
                    {/* {stateStatus} */}
                    <div className="container p-4">
                        <div className="fa-radio">
                            <input type="radio" id="radio1" name="radio-status" onChange={toggleMinute} value="" checked={stateStatus_minute}/>
                            <label for="radio1" className="text-green">Minute</label>
                        </div>
                        <div className="fa-radio">
                            <input type="radio" id="radio2" name="radio-status" onChange={toggleHour} value="" checked={stateStatus_hour} />
                            <label for="radio2" className="text-green">Hour</label>
                        </div>
                        <div className="fa-radio">
                            <input type="radio" id="radio3" name="radio-status" onChange={toggleDay} value="" checked={stateStatus_day}/>
                            <label for="radio3" className="text-green">Day</label>
                        </div>
                    </div>   
                </div>
                    <div className='col-6'> 
                    
                    <br></br><br></br><br></br>
                    </div>
                <div className="col-6">
                        
                        <StatusCard endpoint={stateStatus} trig={stateTrig} />      

                </div>
                        <div className="col-6">
                        <div className="card full-height">
                        
                            <Chartpie endpoint={stateStatus} trig={stateTrig} />
                        
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card full-height">
                        
                            <Chartcount endpoint={stateStatus} trig={stateTrig} />
                            
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card full-height">
                        
                                <Chartcount_speed endpoint={stateStatus} trig={stateTrig} />
                        
                        
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DashboardA
