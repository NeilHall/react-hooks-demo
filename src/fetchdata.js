import React,{Component} from 'react';
import AnarchyListItem from './anarchylistitem.js'

// function Anarchylistitem({ className, component: Component = "li", ...props}) {
//     return (
//         <Component
//             className={["anarchist-list-item", className].join(" ")}
//             {...props}
//         />
//     )
// }

class FetchData extends Component {
    constructor(props){
        super(props)
        this.state={
            people:[]
        }
    }

    async fetchAsync () {
        // await response of fetch call
        let response = await fetch('https://swapi.co/api/people/');
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        this.setState({
            people: data.results
        });
    }

    componentDidMount() {
        this.fetchAsync()
        console.log(this.state.people)
    }

    listData(){
        return(
            this.state.people.map(person=>(<AnarchyListItem key={person.name}>{person.name}</AnarchyListItem>))
        )
    }

    render() {
        return (
            <div>
            {this.listData()}
            </div>
        );
    }
}

export default FetchData;