import React from 'react';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Category from './category/Index';

class PageRoute extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to='/'>Home</Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className='nav-link' to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className='nav-link' to='/category'>Category</Link>
                            </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                  

                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/category' component={Category} />
                </div>
            </Router>
        )
    }
}

export default PageRoute;