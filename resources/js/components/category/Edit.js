import React from 'react';
import axios from 'axios';

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmiteform = this.onSubmiteform.bind(this);
        this.state={
            category_name:''
        }

    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/edit-category/'+ this.props.match.params.id).then(response=>{
            this.setState({category_name:response.data.category_name});
        });

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
        axios.put('http://127.0.0.1:8000/api/update-category/'+this.props.match.params.id,category).then(res=>Console.log(res.data));

    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmiteform}>
                    <div className="form-group">
                        <label>Category Name</label>
                        <input type="text" onChange={this.onChangeCategoryName} value={this.state.category_name} className="form-control" placeholde="Enter Category name" />
                        <br/> <button type="submit" className="btn btn-success">Update Category</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit;