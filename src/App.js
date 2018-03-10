import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        datas: {}
    }
    componentDidMount(){
        this.fetchs()
    }
    fetchs = (e) =>{
        fetch('/v2/movie/top250',{
            method: 'GET'
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({
                datas: res
            })
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>{this.state.datas.title}</div>
            </div>
        );
    }
}

export default App;
