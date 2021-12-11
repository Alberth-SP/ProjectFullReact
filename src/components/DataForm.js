import React , {Component } from 'react';


class DataForm extends Component {

    state = {
        code: '',
        name: '',
        danger: ''
        
    }

    onSubmit = (e) => {
        this.props.addData(this.state.code,this.state.name, this.state.danger);
        e.preventDefault();

    }

    onChange = (e) =>{
        
        if(e.target.name === 'danger'){
            this.setState({
                [e.target.name] : e.target.checked
            })

        }
        else{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        
    }


    render() {
        return (
            <div className="formulario">
                <h3> Agregar Barrio </h3>
                <form  onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Code" 
                        onChange={this.onChange}
                        name="code"
                        value={this.state.code}
                    />
                    <br/><br/>
                    <input 
                        type="text"  
                        placeholder="Name"
                        onChange={this.onChange} 
                        name="name"
                        value={this.state.name}
                    />
                    <br/><br/>
                    <label>
                        Dangerous
                        <input 
                            type="checkbox" 
                            name="danger" 
                            onChange={this.onChange} 
                            value={this.state.danger}
                        />
                    </label>
                    <br/><br/>
                    <input type="submit" value="Crear" />
                </form>
            </div>
            
        )
    }
}

export default DataForm;