import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.addItemService = new ItemService();
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
	});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.addItemService.sendData(this.state.value);
	const response = await axios.get('http://localhost:4200/items');        
	this.props.history.push({
	  pathname: '/',
	  state: { value: response.data }
	})
    }

    render() {
        return(
            <div className="container"  style={{minHeight: 500}}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add Article:
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <br />
                        <input
                            type="submit"
                            value="submit"
                            className="btn btn-primary"
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default AddItem;
