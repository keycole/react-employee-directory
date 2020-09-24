import React from 'react';
import Header from '../Header';
import Form from '../Form';
import Table from '../Table';
import API from '../../utils/API';

class MainContainer extends React.Component {
    state = {
        name:"",
        results: []
    }

    generateUsers = () => {
            API.search()
            .then(res => {this.setState({results: res.data.results})
                console.log("This state = ", this.state);
            })
            .catch(err => console.log(err)) 
    }

    refineResults = () => {
        this.setState({
            ...this.state,
            results: (this.state.results.filter((item) => {
                return ((item.name.first).includes(this.state.name) || (item.name.last.includes(this.state.name)))  
            })
        )})
        console.log("the results after refineResults map are ", this.state.results); 
    }

    componentDidMount() {
        this.generateUsers();
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = (event.target.value).trim();

        // let filteredResults = this.state.results.filter(item => {
        //     console.log("Item.name.first = ", item.name.first);
        //     console.log("Item.name.last = ", item.name.last);
        //     return (item.name.first || item.name.last).includes(name);
        // });
        // console.log(filteredResults);

        this.setState({
          [name]: value,
        //   results: filteredResults
        });

        console.log("this.state after handleInputChange = ", this.state);
      };
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.refineResults(this.state.name);
        console.log("The state after handleFormSubmit = ", this.state)
      }

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