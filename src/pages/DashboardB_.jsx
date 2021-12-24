import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Delay from '../components/delay/Delay'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import Button from '@material-ui/core/Button';

const chartOptions = {
    series: [55, 20, 11, 5, 4, 2, 3],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Car', 'Small Truck', 'Medium Truck', 'Large Truck', 'Extra Large', 'Small Bus', 'Big Bus'],
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
            }
        }
        const chartOptions2 = {
    series: [{
        name: 'Car',
        data: [40, 70, 20, 90, 36, 80, 80, 91, 60, 30]
    },
    { 
        name: 'Small Truck',
        data: [41, 40, 20, 70, 26, 20, 60, 41, 60, 90]
    },
    {
        name: 'Medium Truck',
        data: [42, 50, 90, 40, 46, 30, 30, 21, 50, 10]
    },{
        name: 'Large Truck',
        data: [43, 60, 20, 50, 36, 80, 20, 11, 60, 70]
    },{
        name: 'Extra Large Truck',
        data: [44, 90, 50, 90, 96, 10, 40, 11, 60, 50]
    },{
        name: 'Small Bus',
        data: [44, 70, 20, 20, 36, 10, 30, 31, 40, 90]
    },{
        name: 'Big Bus',
        data: [42, 50, 70, 30, 26, 80, 70, 91, 20, 40]
    },
],
    options: {

        color: ['#6ab04c'],
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
            categories: ['14', '15', '16', '17', '18', '19', '20', '21', '22','23']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: true
        }
    }
}

var statusCard_json = 
[
    {
        count: 5000,
        title: "Car"
    },
    {
        count: 150,
        title: "Small Truck"
    },
    {
        count: 1800,
        title: "Medium Truck"
    },
    {
        count: 1023,
        title: "Large Truck"
    },
    {
        count: 10,
        title: "Extra Large Truck"
    },
    {
        count: 100,
        title: "Small Bus"
    },
    {
        count: 9000,
        title: "Big Bus"
    }
];

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const DashboardB = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            
            <div className="row">
                <div className='col-12'>
                    <div className='row'>
                    {/* <button>Contained</button>       */}
                    
                    </div>
                    <br></br>
                </div>
                <div className="col-6">
                    <div className="row">
                        {
                            statusCard_json.map((item, index) => (
                                <div className="col-3" key={index}>
                                    <StatusCard
                                        // icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='pie'
                            height='150%'
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions2.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions2.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions2.series}
                            type='line'
                            height='150%'
                        />
                    </div>
                </div>
                {/* <div className="col-6">
                    <div className="card full-height">
                        chart
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions2.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions2.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions2.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div> */}
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardB
