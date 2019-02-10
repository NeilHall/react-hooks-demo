import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import FetchData from './fetchdata.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
library.add(faReact, faAnchor);

function App () {

    const [state, dispatch] = useReducer(reducer, {count: 10});

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            default:
                throw new Error();
        }
    }

    useTitle('count = ' + state.count);

    function useTitle(countMessage) {
        useEffect(() => {document.title = countMessage});
    }

    return (
        <div className="center">
        <h1>
            <FontAwesomeIcon icon={['fab', 'react']} size='2x' style={{"color":"#61dafb"}}/>
            &nbsp;React Hooks&nbsp;
            <FontAwesomeIcon icon="anchor" size='2x'/>
        </h1>

        <Button variant="contained" color="primary" onClick={() => dispatch({type: 'decrement'})}>Remove Item</Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="default" onClick={() => dispatch({type: 'increment'})}>Add Item</Button>

        <h2>
            List Downloaded from API:-
        </h2>

        <FetchData count={state.count} />
        </div>
    );
}

export default App;


