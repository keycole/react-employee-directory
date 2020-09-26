import React from 'react';
import Header from '../Header';
import Form from '../Form';
import Table from '../Table';
import API from '../../utils/API';

class MainContainer extends React.Component {
    state = {
        name:"",
        results: [],
        sort: "ascend"
    }
    
    generateUsers = () => {
            API.search()
            .then(res => {
                //Sort the returned list alphabetically by last name
                let firstSort = (res.data.results).sort(function(a, b){
                    if(a.name.last < b.name.last) { return -1; }
                    if(a.name.last > b.name.last) { return 1; }
                    return 0;
                })
                //Set the state results to equal the sorted list
                this.setState({results: firstSort})
            })
            .catch(err => console.log(err)) 
    }
    
    sortToggle = () => {
        if(this.state.sort === "ascend"){
            this.descendSort();
            this.setState({...this.state, sort: "descend"})
        } else {
            this.ascendSort();
            this.setState({...this.state, sort: "ascend"})
        }
    }

    ascendSort = () => {
        let ascendResults = (this.state.results).sort(function(a, b){
        if(a.name.last < b.name.last) { return -1; }
        if(a.name.last > b.name.last) { return 1; }
        return 0})
        this.setState({...this.state, results: ascendResults})
    }

    descendSort = () => {
            let descendResults = (this.state.results).sort(function(a, b){
            if(b.name.last < a.name.last) { return -1; }
            if(b.name.last > a.name.last) { return 1; }
            return 0})
            this.setState({...this.state, results: descendResults})
        }

    //On load call the generateUsers function
    componentDidMount() {
        this.generateUsers();
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = ((event.target.value).trim()).toLowerCase();

        this.setState({
          [name]: value,
        });
        console.log("this.state after handleInputChange = ", this.state);
      };

    handleSort = event => {
        event.preventDefault();
        console.log("Sort = ", this.state.sort);
        this.sortToggle(this.state.sort)
    }

    render(){
        return (
            <div>
                <Header />
                <Form   name={this.state.name}
                        // handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange} />
                <Table  name={this.state.name} 
                        results={this.state.results} 
                        sort={this.state.sort} 
                        handleSort={this.handleSort}/>
                {console.log("The state inside the render return is ", this.state)}
            </div>
        );
    }
};

export default MainContainer;