import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from '../pages'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Index} path='/' exact />
        </Switch>
    </BrowserRouter>
)

export default Router
