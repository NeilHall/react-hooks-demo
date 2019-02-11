import React, {Component} from 'react';
import './App.css';
import FetchData from './fetchdata.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

library.add(faReact, faAnchor)

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 10
        }
        this.decrementCount = this.decrementCount.bind(this)
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount(){
        this.setState({
            count: this.state.count - 1
        })
    }

    componentDidMount() {
        document.title = 'count = ' + this.state.count
    }

    componentDidUpdate() {
        document.title = 'count = ' + this.state.count
    }

    render() {
        return (
            <div className="center">
                <h1>
                  <FontAwesomeIcon icon={['fab', 'react']} size='2x' style={{"color":"#61dafb"}} />
                  &nbsp;React Hooks&nbsp;
                  <FontAwesomeIcon icon={['fas', 'anchor']} size='2x' style={{"color":"#61dafb"}} />
                </h1>

                <Button onClick={this.decrementCount}>Remove Item</Button>
                &nbsp;&nbsp;
                <Button onClick={this.incrementCount}>Add Item</Button>

                <h2>
                    List Downloaded from API:-
                </h2>
                <FetchData count={this.state.count} />
            </div>
        );
    }
}


