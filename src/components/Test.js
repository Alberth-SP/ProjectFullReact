import {Component} from 'react';

import { connect } from 'react-redux';

class Test extends Component {
    render() {
        const { datas } = this.props;
        console.log(datas)
        
        return (
            <div>
                sdfsfds
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        datas: state.reduceItem
    };
}
const wrapper = connect(mapStateToProps);
const cmpTest = wrapper(Test);
export default cmpTest;