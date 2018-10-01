import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TableRow extends Component {

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.item}
                </td>
                <td>
                    <Link to={"edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <a href="# " onClick={(e) => this.props.handleDelete(e,this.props.obj._id)} className="btn btn-danger">Delete</a>
                </td>
            </tr>
        );
    }
}

export default TableRow;
