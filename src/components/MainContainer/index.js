import React from 'react';
import axios from "axios";
import Header from '../Header';
import Form from '../Form';
import Table from '../Table';

class MainContainer extends React.Component {
    state = {
        name:"",
        results: []
    }

    generateUsers = () => {
            axios.get("https://randomuser.me/api/?nat=us&inc=name,location,phone,email,picture&results=50")
            .then(res => {this.setState({results: res.data.results})
                console.log("This state = ", this.state);
            })
            .catch(err => console.log(err)) 
    }

    // refineResults = () => {
    //     this.setState({
    //         results: (this.state.results.map(result => {
    //             ((result.name.first).includes(this.state.name) || (result.name.last).includes(this.state.name))  
    //         })
    //     )})
    //     console.log("the results after refineResults map are ", this.state.results); 
    // }

    componentDidMount() {
        this.generateUsers();
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = (event.target.value).trim();

        this.setState({
          [name]: value
        });
        console.log("this.state after handleInputChange = ", this.state);
      };
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.refineResults(this.state.name);
        console.log("The state after handleFormSubmit = ", this.state)
      };

    render(){
        return (
            <div>
                <Header />
                <Form   name={this.state.name}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange} />
                <Table results={this.state.results}/>
            </div>
        );
    }
};

export default MainContainer;