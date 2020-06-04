import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import NewTranForm from '../components/NewTranForm'
import AboutUs from '../components/AboutPage'
import EditPage from '../components/editMemo'
import NotFoundPage from '../components/NotFoundPage'
import Footer from '../components/Footer'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <div>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/new" component={NewTranForm} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path='/edit/:id' component={EditPage} exact/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        <Footer/>
    </BrowserRouter>
)

export default AppRouter