import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

library.add(faReact, faAnchor)


function AnarchyListItem({ className, component: Component = "li", ...props}) {
    return (
        <Component
            className={["anarchist-list-item", className].join(" ")}
            {...props}
        />
    )
}

let listData = [
    {id:1, name: 'Vandalism'},
    {id:2, name: 'Lists'},
    {id:3, name: 'Irony'},
    {id:4, name: 'Lists'},
    {id:5, name: 'Repitition'}
]

export default function App () {
    return (
      <div className="center">
        <h1>
            <p>
                <FontAwesomeIcon icon={['fab', 'react']} size='2x' style={{"color":"#61dafb"}}/>
                &nbsp;React Hooks&nbsp;
                <FontAwesomeIcon icon="anchor" size='2x'/>
            </p>
            Things I Hate:-
        </h1>
        <h2>
            <ol type = "1">
                {
                    listData.map(item => (<AnarchyListItem key={item.id}>{item.name}</AnarchyListItem>))
                }
            </ol>
              <ol type = "A">
                <AnarchyListItem className="test">Inconsitency</AnarchyListItem>
              </ol>
        </h2>
      </div>
    );
}


