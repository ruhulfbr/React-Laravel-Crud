import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';


class Category extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Link className="btn btn-secondary" to='/category'>Listing </Link> 
                    <Link className="btn btn-primary" to='/add-category'>Add Category</Link>

                    <Route exact path='/add-category' component={Add} />
                    <Route exact path='/category' component={Listing} />
                    <Route exact path='/edit-category/:id' component={Edit} />
                </div>
            </Router>
        )
    }
}

export default Category;