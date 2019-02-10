import React,{Component} from 'react';
import ListItem from './listItem.js'

class FetchData extends Component {
    constructor(props){
        super(props);
        this.state={
            peopleList:[{name:"Star Wars Characters Should Load Here"}]
        }
    }

    async fetchAsync () {
        let response = await fetch('https://swapi.co/api/people/'); // await fetch call
        let data = await response.json();                                 // proceed when promise is resolved

        this.setState({                                             // proceed when second promise is resolved
            peopleList: data.results
        });
        console.log(this.state.peopleList)
    }

    componentDidMount() {
        this.fetchAsync()
    }

    listData(){
        return(
            this.state.peopleList
                .filter((value,index) => index < this.props.count)
                .map(person=>(
                    <ListItem key={person.name} className={"star-wars"}>{person.name}</ListItem>)
                )
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