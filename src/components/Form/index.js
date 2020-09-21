import React from 'react';
import './style.css';

function Form() {
    return (
        <form className="employeeSearch">
            <label className="employeeSearch">Search for your colleague:&nbsp;</label>
            <input className="employeeSearch" placeholder="Name Here"/>
            <button className="employeeSearch">Submit</button>
        </form>
    );
}

export default Form;