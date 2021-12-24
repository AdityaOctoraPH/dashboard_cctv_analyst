import React, {useState,useEffect} from 'react'

import axios from 'axios';

import './statuscard.css'

function make(data,new_var){
    if(data !=null ){
        // for(let i=0;i<1;i++){
            new_var.push({
                count: data[9].sum_car_up,
                title: "ㅤㅤCar"
            },{
                count: data[9].sum_truck_s_up,
                title: "Small Truck"
            },{
                count: data[9].sum_truck_m_up,
                title: "Medium Truck"
            },{
                count: data[9].sum_truck_l_up,
                title: "Large Truck"
            },{
                count: data[9].sum_truck_xl_up,
                title: "XL Truck"
            },{
                count: data[9].sum_bus_s_up,
                title: "Small Bus"
            },{
                count: data[9].sum_bus_l_up,
                title: "Big Bus"
            
            });
        // }
    }
} 


const StatusCard = props => {
    const[statusCard,setstatusCard]=useState([]);
    const[someState, setSomeState] = useState(0);
    const[stateVcratio,setstateVcratio]=useState(0.0)
    var r_data = [];
    
    const axi = {
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
    
    let count = `http:${window._env_.REACT_APP_PROXY8080}/${props.endpoint}`;
    let vc = `http:${window._env_.REACT_APP_PROXY8080}/vc_ratio_${props.endpoint}`;
    const request1 = axios.get(count,axi);
    const request2 = axios.get(vc,axi);

    const getData = async()=> {
        axios.all([request1, request2]).then(axios.spread((...res) => {
            // setStatecam1hlsurl(res[0].data.data[0].URL)
            // setStatecam2hlsurl(res[1].data.data[0].URL)
            const newState = make(res[0].data,r_data);
            setSomeState(newState);
            setstatusCard(r_data);
            setstateVcratio((res[1].data.vc_ratio_up).toFixed(2));
            console.log(res)
        }))
        
        // console.log(data);
        // console.log(this.state.xn);
      
    }

    useEffect(()=>{
        
        getData();

    },[props.endpoint,props.trig]);
    return (
        <div className="row">
            {
                statusCard.map((item, index) => (
                    <div className="col-3" key={index}>
                        <div className='status-card'>
                            {/* <div className="status-card__icon">
                                <i className={props.icon}></i>
                            </div> */}
                            <div className="status-card__info">
                                <h4>{item.count}</h4>
                                <span>{item.title}</span>
                            </div>
                        </div>
                    </div>
                ))

            }
            <div className="col-3">
                        <div className='status-card'>
                            
                            <div className="status-card__info">
                                <h4>{stateVcratio}</h4>
                                <span>V/C Ratio</span>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default StatusCard
