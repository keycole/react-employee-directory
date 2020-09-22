import React from 'react';
import './style.css';

function Form(props) {
    return (
        <form className="employeeSearch">
            <label className="employeeSearch">Search for your colleague:&nbsp;</label>
            <input 
                 onChange={props.handleInputChange}
                 value={props.value}
                 name={props.name}
                type="text"
                className="employeeSearch" placeholder="Name Here" />
            <button className="employeeSearch"
                onClick={props.handleFormSubmit}
                >Submit</button>
        </form>
    );
}

export default Form;