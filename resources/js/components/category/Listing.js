import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";

class Listing extends React.Component{
    constructor(){
        super();
        this.state={
            categories:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3
        }
        this.count = 1;
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/category').then(response=>{
            this.setState({categories:response.data});
        });
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    catDelete(category_id){
        axios.get('http://127.0.0.1:8000/api/delete-category/' + category_id).then(response=>{
            var categories = this.state.categories;

            for(var i = 0; i<categories.length;i++){
                if(categories[i].id==category_id){
                    categories.splice(i,1);
                    this.setState({categories:categories});
                }
            }
        });
    }

    render(){
        return(
            <div>
            <br/><table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl No</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Update At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(category=>{
                                return(
                                <tr>
                                    <th scope="row">{this.count++}</th>
                                    <td>{category.category_name} </td>
                                    <td>{category.status==1?("Active"):("Inactive")}</td>
                                    <td>{category.created_at}</td>
                                    <td>{category.updated_at}</td>
                                    <td>
                                        
                                        <Link to={`/edit-category/${category.id}`} className="btn-sm btn btn-warning">Edit</Link>
                                        <button type="button" onClick={this.catDelete.bind(this,category.id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )})
                        }
                        
                    </tbody>
                </table>
                <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                    />
                </div>
                
            </div>
        )
    }
}

export default Listing;