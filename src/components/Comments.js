import React, {Component} from 'react'
import './style.css'

class Comments extends Component {

    state = {
        data: []
    }

    async componentDidMount(){

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({data});

    }


    render () {
        return (
            <div>
                <h2> Comments </h2>
                { this.state.data.map( it => {
                    return  <div className="comment" key={it.id}>
                        <h3>{ it.title }</h3>
                        <p> { it.body }</p>
                    </div>
                }) }
            </div>


        )
    }
}

export default Comments;