import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';


class EditItem extends Component {

    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.state = {
            value: ''
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:4200/items/edit/'+this.props.match.params.id)
        .then((response) => {
            this.setState({
                value: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.addItemService.updateDate(this.state.value, this.props.match.params.id);
	const response = await axios.get('http://localhost:4200/items');        
	this.props.history.push({
	  pathname: '/index',
	  state: { value: response.data }
	})
    }

    render() {
        return(
            <div className="container" style={{minHeight: 500}}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Edit Item:
                        <input
                            type="text"
                            value={this.state.value && this.state.value.item}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default EditItem;
