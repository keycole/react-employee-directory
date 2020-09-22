import React from 'react';
import axios from "axios";
//import API from '../../utils/API';
import Header from '../Header';
import Form from '../Form';
import Table from '../Table';

class MainContainer extends React.Component {
    state = {
        results: []
    }

    generateUsers = () => {
            axios.get("https://randomuser.me/api/?nat=us&inc=name,location,phone,email,picture&results=50")
            .then(res => {this.setState({results: res.data.results})
                console.log("This state = ", this.state);
            })
            .catch(err => console.log(err)) 
    }

    componentDidMount() {
        this.generateUsers();
    }

    render(){
        return (
            <div>
                <Header />
                <Form />
                <Table />
            </div>
        );
    }
};

export default MainContainer;