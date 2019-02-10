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
        this.state={
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
                <p>
                    <FontAwesomeIcon icon={['fab', 'react']} size='2x' style={{"color":"#61dafb"}}/>
                    &nbsp;
                    React Hooks
                    &nbsp;
                    <FontAwesomeIcon icon="anchor" size='2x'/>
                </p>
            </h1>
                <p>
                    <Button variant="contained" color="primary" onClick={this.decrementCount}>Remove</Button>
                    &nbsp;
                    &nbsp;
                    <Button variant="contained" color="default" onClick={this.incrementCount}>Add</Button>
                </p>
              <h2>
                List Downloaded from API:-
              </h2>
            <FetchData count={this.state.count} />
          </div>
        );
    }
}


