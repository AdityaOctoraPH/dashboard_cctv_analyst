import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

function make2(data,new_var){
    if(data !=null ){
        for(let i=0;i<1;i++){
            new_var.push(data.presentase_car_up, data.presentase_truck_s_up,data.presentase_truck_m_up,data.presentase_truck_l_up,data.presentase_truck_xl_up,data.presentase_bus_s_up,data.presentase_bus_l_up);
        }
    }
} 

const Chartpie = props => {
  var series = [];
  const[statepie,setstatepie]=useState([]);
  const[chartOptions, setchartOptions] = useState([]);
  const[someState, setSomeState] = useState(0);

  var labelspie= ['Car', 'Small Truck', 'Medium Truck', 'Large Truck', 'XL Truck', 'Small Bus', 'Big Bus'];
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
  const getData = async()=> {
        
    let data = await axios.get(`http:${window._env_.REACT_APP_PROXY8080}/vc_ratio_${props.endpoint}`,axi).then(({ data }) => data); 

    const newState = make2(data,series);
    setSomeState(newState);
    setstatepie(series);
    chart(labelspie);
    // console.log(data);
    // console.log(this.state.xn);
  }

    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    const chart = (labelpie) => {
      setchartOptions({
        // series: [55, 20, 11, 5, 4, 2, 3],
                options: {
                  title: {
                    text: `Vehicle Percentage in ${props.endpoint.charAt(0).toUpperCase() + props.endpoint.slice(1)}`,
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
                  chart: {
                    width: 380,
                    
                    type: 'pie',
                  },
                  labels: labelpie,
                //   labels: ['Car', 'Small Truck', 'Medium Truck', 'Large Truck', 'Extra Large', 'Small Bus', 'Big Bus'],
                  responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'top'
                      }
                    }
                  }]
                },
                
              });
            }


            useEffect(()=>{
              getData();
          },[props.endpoint,props.trig]);

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
                          series={statepie}
                            type='pie'
                            height='150%'
                        />
    </div>
    )
}

export default Chartpie
