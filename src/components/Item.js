import React, {Component} from 'react';


class Item extends Component {

    styleDangerous(){
        return {
            backgroundColor:  this.props.item.dangerous ? '#db8a8a': '#cde6bc',
        
            
        }
    }
    render() {
        const {item} = this.props;
        return <div style={this.styleDangerous()} className="item" >
            <p >
                {item.id } : {item.name }    
            </p>
            <button > Ver Dealle </button>
        </div>
    }
}

export default Item;