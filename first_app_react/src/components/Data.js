import React, {Component} from 'react';
import './style.css';
import { connect } from 'react-redux';
import { deleteData, changeState, getDatas} from '../redux/actions/item';
class Data extends Component {

    componentDidMount(){
        this.props.getDatas();
        
    }

    styleDanger(danger){
        return {
            backgroundColor: danger===true ? '#db8a8a': '#cde6bc'
        }
    }

    render() {
        return <div>       
            
            { this.props.listData.map( (it) => {
                return (
                    <div style={this.styleDanger(it.dangerous)} className="item" key={it.code}>
                        <p> {it.code} - {it.name} </p> 
                        <button onClick={ () => this.props.deleteData(it.code)}> Delete</button>
                        <button onClick={ () => this.props.changeState(it.code)}> Change State</button>
                    </div>
                )
            } ) }
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
        changeState: (id) => dispatch(changeState(id)),
        getDatas: () => dispatch(getDatas())
    }

}
const wrapper = connect(mapStateToProps, mapDispatchToProps);
const cmpData = wrapper(Data);
export default cmpData;