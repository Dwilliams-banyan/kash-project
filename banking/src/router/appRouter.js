import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import FormPage from '../components/editMemo'
import NewTransaction from '../components/NewTranForm'
import AboutUs from '../components/AboutPage'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/editPage" component={FormPage} />
            <Route path="/addPage" component={NewTransaction} />
            <Route path="/aboutPage" component={AboutUs} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter