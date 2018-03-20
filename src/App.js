import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
        <Background/>
    );
  }
}

class Background extends Component
{
    constructor(props)
    {
        super();
        this.state = {
          circles: null
        };
    }

    componentDidMount()
    {
        this.setState({circles: []});
    }

    addCircle(x, y)
    {
        let circles = this.state.circles;
        circles.push(<Circle x={x} y={y}/>);

        this.setState({circles: circles});
    }

    handleClick(e)
    {
        let x = e.clientX;
        let y = e.clientY;
        this.addCircle(x, y);
    }

    render()
    {
        return <div className={'App'} onClick={(e)=>this.handleClick(e)}>{this.state.circles}</div>;
    }
}

//Clase que representa a un circulo
class Circle extends Component
{
    constructor(props)
    {
        super();

        //Objeto que guarda el estado del circulo
        //la posicion x y y se obtiene mediante props
        this.state = {
            x: props.x,
            y: props.y,
            w: 50,
            h: 50,
            img: null
        };
    }

    //Una vez montado el nodo, se carga la imagen del circulo
    componentDidMount()
    {
        this.setState({img:
            <img
                src={require('./circle.png')}
                height={this.state.h}
                width={this.state.w}
                style={{position: "absolute", left: this.state.x-this.state.w/2, top: this.state.y-this.state.h/2}}
            />});
    }

    render()
    {
        return (
            <div position={"absolute"}>
                {this.state.img}
            </div>
        );
    }
}

export default App;
