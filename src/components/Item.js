import React, {Component} from 'react';


class Item extends Component {
    render() {
        const {item} = this.props;
        return <div key={this.props.item.id}>
            <span >
                {item.id } : {item.name }     
                
                <button > Ver Detalle </button>
        
            </span>
        </div>
    }
}


export default Item;