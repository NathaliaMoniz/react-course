import React, {Component} from 'react'

class ContadorClase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
    }
    incrementar() {
        this.setState(prevState => ({
            contador: prevState.contador + 1
        }));
    }
    
    decrementar() {
        this.setState(prevState => ({
            contador: prevState.contador - 1
        }));
    }
    

    render() {

        const {contador} = this.state
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <p>Contador: {contador}</p>
                <button onClick={() => this.incrementar()}>Incrementar</button>
                <button onClick={() => this.decrementar()}>Decrementar</button>
            </div>
        )

    }
}

export default ContadorClase;