import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    styleDangerous(){
        return {
            backgroundColor:  this.props.item.dangerous ? '#db8a8a': '#cde6bc'
        }
    } 

    render() {
        const {item} = this.props;
        return <div style={this.styleDangerous()} className="item" >
            <p >
                {item.id } : {item.name }    
            </p>
            <button onClick={this.props.deleteData.bind(this, item.id)}> Delete </button>
            <button onClick={this.props.updateData.bind(this, item.id)}> Change State </button>
        </div>
    }
}

Item.propTypes = {
    item: PropTypes.object
}

export default Item;