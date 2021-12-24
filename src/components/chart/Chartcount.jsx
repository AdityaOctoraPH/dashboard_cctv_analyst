import React, {useState,useEffect}from 'react'

import Chart from 'react-apexcharts'
import axios from 'axios';
import { useSelector } from 'react-redux'

function make(data_raw,new_var){
    if(data_raw !=null ){
        for(let i=0;i<10;i++){ 
            new_var[0].data.push(data_raw[i].sum_car_up);
            new_var[1].data.push(data_raw[i].sum_truck_s_up);
            new_var[2].data.push(data_raw[i].sum_truck_m_up);
            new_var[3].data.push(data_raw[i].sum_truck_l_up);
            new_var[4].data.push(data_raw[i].sum_truck_xl_up);
            new_var[5].data.push(data_raw[i].sum_bus_s_up);
            new_var[6].data.push(data_raw[i].sum_bus_l_up);

        }
    }
} 

function make2(data_raw,par,new_var){
    if(data_raw !=null ){
        if(par=="minutes"){
            for(let i=0;i<10;i++){ 
                new_var.push((data_raw[i].time).slice(11,16));
    
            }
        }
        else if(par=="hours"){
            for(let i=0;i<10;i++){ 
                new_var.push((data_raw[i].time).slice(11,16));
    
            }
        }
        else if(par=="days"){
            for(let i=0;i<10;i++){ 
                new_var.push((data_raw[i].time).slice(8,10));
    
            }
        }
        
    }
} 

const Chartcount = props => {
    const[someState, setSomeState] = useState(0);
    const[someState2, setSomeState2] = useState(0);
    const[stateline,setstateline]=useState([]);
    const[chartOptions, setchartOptions] = useState([]);
    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    
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

    var series = 
        [{
            name: 'Car',
            data: []
        },{ 
            name: 'Small Truck',
            data: []
        },{
            name: 'Medium Truck',
            data: []
        },{
            name: 'Large Truck',
            data: []
        },{
            name: 'XLTruck',
            data: []
        },{
            name: 'Small Bus',
            data: []
        },{
            name: 'Big Bus',
            data: []
        }];
        var labelline = [];

    const getData = async()=> {
        
        let data = await axios.get(`http:${window._env_.REACT_APP_PROXY8080}/${props.endpoint}`,axi).then(({ data }) => data); 
    
        const newState = make(data,series);
    
        setSomeState(newState);

        const newState2 = make2(data,props.endpoint,labelline);
    
        setSomeState2(newState2);
        
        setstateline(series);
        chart(labelline);
        // console.log(series);
        // console.log(this.state.xn);
      }

    const chart = (labelsline) => {
        setchartOptions({
        // series: statesline,

        // [{
        //     name: 'Car',
        //     data: [40, 70, 20, 90, 36, 80, 80, 91, 60, 30]
        // },
        // { 
        //     name: 'Small Truck',
        //     data: [41, 40, 20, 70, 26, 20, 60, 41, 60, 90]
        // },
        // {
        //     name: 'Medium Truck',
        //     data: [42, 50, 90, 40, 46, 30, 30, 21, 50, 10]
        // },{
        //     name: 'Large Truck',
        //     data: [43, 60, 20, 50, 36, 80, 20, 11, 60, 70]
        // },{
        //     name: 'Extra Large Truck',
        //     data: [44, 90, 50, 90, 96, 10, 40, 11, 60, 50]
        // },{
        //     name: 'Small Bus',
        //     data: [44, 70, 20, 20, 36, 10, 30, 31, 40, 90]
        // },{
        //     name: 'Big Bus',
        //     data: [42, 50, 70, 30, 26, 80, 70, 91, 20, 40]
        // }]
        options: {
            title: {
                text: `Vehicles Counting in ${props.endpoint.charAt(0).toUpperCase() + props.endpoint.slice(1)}`,
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '14px',
                  fontWeight:  'bold',
                  fontFamily:  undefined,
                  color:  '#263238'
                }
            },
    
            // color: ['#6ab04c'],/
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: labelline
                // categories: ['14', '15', '16', '17', '18', '19', '20', '21', '22','23']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: true
            }
        }
    })}
    useEffect(()=>{
        getData();
    },[props.endpoint,props.trig])
    return (
        <div>
        
        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={stateline}
                            type='line'
                            height='150%'
                        />
        </div>
    )
}

export default Chartcount
