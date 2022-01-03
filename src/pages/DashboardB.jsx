import React, {useState,useEffect,useLayoutEffect} from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'
import StatusCardB from '../components/status-card/StatusCardB'

import Delay from '../components/delay/Delay'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import ChartpieB from '../components/chart/ChartpieB'
import ChartcountB from '../components/chart/ChartcountB'
import '../components/delay/delay.css'
import Chartcount_speedB from '../components/chart/Chartcount_speedB';

const DashboardA = () => {

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

    const[stateStatus,setstateStatus]=useState("minutes");
    const[stateStatus_minute,setstateStatus_minute]=useState(true);
    const[stateStatus_hour,setstateStatus_hour]=useState(false);
    const[stateStatus_day,setstateStatus_day]=useState(false);
    const [value, onChange] = useState([new Date(), new Date()]);

    const toggleMinute = () => {
        setstateStatus_minute(true);
        setstateStatus_hour(false);
        setstateStatus_day(false);
        setstateStatus("minutes");
        console.log('minute');
       
    }
    const toggleHour = () => {
        setstateStatus_minute(false);
        setstateStatus_hour(true);
        setstateStatus_day(false);
        setstateStatus("hours");
        console.log('hour');
        
    }
    const toggleDay = () => {
        setstateStatus_minute(false);
        setstateStatus_hour(false);
        setstateStatus_day(true);
        setstateStatus("days");
        console.log('day');
    }
    
    useEffect(()=>{
    },[]);

    // useLayoutEffect(() => {
    //     getData();
        
    // }, [])

    return (
        <div>
            <div className="row">
                <div className='col-6'>
                    {/* {stateStatus} */}
                    <div class="container p-4">
                        <div class="fa-radio">
                            <input type="radio" id="radio1" name="radio-status" onChange={toggleMinute} value="" checked={stateStatus_minute}/>
                            <label for="radio1" class="text-green">Minute</label>
                        </div>
                        <div class="fa-radio">
                            <input type="radio" id="radio2" name="radio-status" onChange={toggleHour} value="" checked={stateStatus_hour} />
                            <label for="radio2" class="text-green">Hour</label>
                        </div>
                        <div class="fa-radio">
                            <input type="radio" id="radio3" name="radio-status" onChange={toggleDay} value="" checked={stateStatus_day}/>
                            <label for="radio3" class="text-green">Day</label>
                        </div>
                    </div>           
                </div> 
                <div className='col-6'>
                        <div className="row">
                            <div className="datetime">
                                {/* <DateTimeRangePicker
                                    onChange={onChange}
                                    value={value}
                                />     */}
                            </div>
                        </div>
                    
                    <br></br><br></br><br></br>
                </div>
                <div className="col-6">
                    
                        <StatusCardB endpoint={stateStatus} />      
                        
                      
                </div>
                <div className="col-6">
                    <div className="card full-height">
                    
                        <ChartpieB endpoint={stateStatus}/>
                     
                    </div>
                </div>
                <div className="col-12">
                    <div className="card full-height">
                    
                        <ChartcountB endpoint={stateStatus}/>
                        
                    </div>
                </div>
                <div className="col-12">
                    <div className="card full-height">
                       
                            <Chartcount_speedB endpoint={stateStatus}/>
                    
                    
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DashboardA
