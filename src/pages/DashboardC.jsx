import React, {useState,useEffect,useLayoutEffect} from 'react'
import { compareAsc, format } from 'date-fns'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'
import StatusCardC from '../components/status-card/StatusCardC'

import Delay from '../components/delay/Delay'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import ChartpieC from '../components/chart/ChartpieC'
import ChartcountC from '../components/chart/ChartcountC'
import '../components/delay/delay.css'
import Chartcount_speedC from '../components/chart/Chartcount_speedC';

let t = 0;

function getYesterdayDate() {
    return new Date(new Date().getTime() - 24*60*60*1000);
  }

  
const DashboardC = () => {
    const [isActive, setIsActive] = useState(true);
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

    const[stateTrig,setstateTrig]=useState(0);

    const[value, onChange] = useState([getYesterdayDate(), new Date()]);
    const[stateStatus,setstateStatus]=useState(`date/?startdate=`+format(value[0], 'ddMMyyyy-HH:mm:ss')+`&enddate=`+format(value[1], 'ddMMyyyy-HH:mm:ss'));

    const toggle = () => {
        
        // setstateStatus(`minutes`); //?startdate=30122021-00:00:00&enddate=30122021-02:03:00
        setstateStatus(`date/?startdate=`+format(value[0], 'ddMMyyyy-HH:mm:ss')+`&enddate=`+format(value[1], 'ddMMyyyy-HH:mm:ss'));
       
    }

    const chooseDate = (value) =>{
        console.log(value)
        onChange(value)
    }
    
    const onSubmitForm =(e)=> {
        toggle();
        e.preventDefault();
        console.log(stateStatus)
      }

    useEffect(()=>{
        // console.log([format(value[0], 'ddMMyyyy-HHmmss'), format(value[1], 'ddMMyyyy-HHmmss')]);
        console.log(stateStatus)
        console.log(value);
        }, [])
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
                    <form action="" className="form" onSubmit={onSubmitForm}>

                            <button >Submit</button>
                
                        </form>
                </div>
                <div className='col-6'>
                
                    
                {/* {stateStatus} */} 
                
                        <div className="datetime">
                            <DateTimeRangePicker
                                onChange={(value)=>chooseDate(value)}
                                value={value}
                            />    
                        </div>
                        <br></br><br></br><br></br>
            </div>
                <div className="col-6">
                        
                        <StatusCardC endpoint={stateStatus} trig={0} />      

                </div>
                        <div className="col-6">
                        <div className="card full-height">
                        
                            <ChartpieC endpoint={stateStatus} trig={0} />
                        
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card full-height">
                        
                            <ChartcountC endpoint={stateStatus} trig={0} />
                            
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card full-height">
                        
                                <Chartcount_speedC endpoint={stateStatus} trig={0} />
                        
                        
                        </div>
                    </div>
                
                
                

            </div>
        </div>
    )
}

export default DashboardC
