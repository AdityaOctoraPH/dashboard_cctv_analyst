import React from 'react'

import { Route, Switch } from 'react-router-dom'

import DashboardA from '../pages/DashboardA'
import DashboardB from '../pages/DashboardB'
import DashboardC from '../pages/DashboardC'
import Loginpages from '../pages/Loginpages'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={DashboardA}/>
            <Route path='/dashb' exact component={DashboardB}/>
            <Route path='/dashc' exact component={DashboardC}/>
            <Route path='/login' exact component={Loginpages}/>
        </Switch>
    )
}

export default Routes
