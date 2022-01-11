import React from 'react'

import { Route, Switch } from 'react-router-dom'

import DashboardA from '../pages/DashboardA'
import DashboardB from '../pages/DashboardB'
import DashboardC from '../pages/DashboardC'
<<<<<<< HEAD
import Loginpages from '../pages/Loginpages'
=======
>>>>>>> fb57e0cdd91a32ce8591a29f33c0f95a29486c08

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={DashboardA}/>
            <Route path='/dashb' exact component={DashboardB}/>
            <Route path='/dashc' exact component={DashboardC}/>
<<<<<<< HEAD
            <Route path='/login' exact component={Loginpages}/>
=======
>>>>>>> fb57e0cdd91a32ce8591a29f33c0f95a29486c08
        </Switch>
    )
}

export default Routes
