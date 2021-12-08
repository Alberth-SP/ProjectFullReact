import React, {Component} from 'react';


class Item extends Component {
    render() {
        const {item} = this.props;
        return <div className="item">
            <p >
                {item.id } : {item.name }    
            </p>
            <button > Ver Dealle </button>
        </div>
    }
}


export default Item;