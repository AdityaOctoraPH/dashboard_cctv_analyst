import React from 'react'

import { Route, Switch } from 'react-router-dom'

import DashboardA from '../pages/DashboardA'
import DashboardB from '../pages/DashboardB'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={DashboardA}/>
            <Route path='/dashb' exact component={DashboardB}/>
            <Route path='/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes
