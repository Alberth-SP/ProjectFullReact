import React, {Component} from 'react';
import './style.css';
import { connect } from 'react-redux';
import { deleteData, changeState} from '../redux/actions/item';
class Data extends Component {

    styleDanger(danger){
        return {
            backgroundColor: danger===1 ? '#db8a8a': '#cde6bc'
        }
    }

    render() {
        return <div>
            
            { this.props.listData.data.map( (it) => {
                return (
                    <div style={this.styleDanger(it.dangerous)} className="item" key={it.id}>
                        <p> {it.id} - {it.name} </p> 
                        <button onClick={ () => this.props.deleteData(it.id)}> Delete</button>
                        <button onClick={ () => this.props.changeState(it)}> Change State</button>
                    </div>
                )
            } )}
        </div>
    } 
}

function mapStateToProps(state) {
    return {
        listData: state.reduceItem
    };
};

function  mapDispatchToProps(dispatch){
    return {
        deleteData: (id) => dispatch(deleteData(id)),
        changeState: (val) => dispatch(changeState(val))
    }

}
const wrapper = connect(mapStateToProps, mapDispatchToProps);
const cmpData = wrapper(Data);
export default cmpData;