import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';
import TableRow from './TableRow';


class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        }
        this.addItemService = new ItemService();
    }

    componentDidMount = () => {
        axios.get('http://localhost:4200/items')
        .then((response) => {
            this.setState({
                items: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleDelete = async (event, id) => {
        event.preventDefault();
        this.addItemService.deleteData(id);
	const response = await axios.get('http://localhost:4200/items'); 
	this.setState({
            items: response.data
        }); 
    }


    tabRow = () => {
        if(this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} handleDelete={this.handleDelete} {...this.props} />
            })
        }
    }

    render() {
        return (
            <div className="container" style={{minHeight: 500}}>
                <h1 className='text-center'>React Frontend mini-project</h1>
                <br />
		{this.state.items.length > 0 ?
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Article Id</td>
                            <td>Article Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
		 : <div style={{minHeight: 200, position: "absolute", top: 200, left: 400}}>"No Records Found.. click on Add-New-Article Link"</div>
	      }
            </div>
        );
    }
}

export default IndexItem;
