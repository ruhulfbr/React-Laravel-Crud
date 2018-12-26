import React from 'react';
import axios from 'axios';

class Add extends React.Component{
    constructor(){
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmiteform = this.onSubmiteform.bind(this);
        this.state={
            category_name: ''
        }
       
    }
    onChangeCategoryName(e){
        this.setState({
            category_name:e.target.value
        });
    }
    onSubmiteform(e){
        e.preventDefault();
        const category={
            category_name : this.state.category_name
           
        }
        axios.post('http://127.0.0.1:8000/api/save-category',category).then(res=>Console.log(res.data));

    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmiteform}>
                    <div className="form-group">
                        <label htmlFor="Category_name">Category Name</label>
                        <input width="200" type="text" name="category_name" onChange={this.onChangeCategoryName} className="form-control" id="category_name" placeholde="Enter Category name" />
                        <br/> <button type="submit" className="btn btn-success">Save Category</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;