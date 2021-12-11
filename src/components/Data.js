import React, {Component} from 'react';
import './style.css';
import Item from './Item.js';
class Data extends Component {

    render() {
        return <div>
            { this.props.listData.map( (it) => 
                <Item 
                    item={it}  
                    key={it.id}  
                    deleteData={this.props.deleteData}
                    updateData={this.props.updateData}
                /> ) }
        </div>
    } 
}

export default Data;