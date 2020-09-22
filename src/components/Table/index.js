import React from 'react';
import './style.css';

function Table(props) {
    console.log("The props inside Table = ", props);
        return (
        <table>
            <tbody>
            <tr>
                <th>Face to a Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
            {props.results.map(result => (
                <tr id={result.key}>
                <td>
                    <img 
                        src={result.picture.large}
                        alt="{result.name.first + ' ' + result.name.last}"
                        width="50px"
                    />
                </td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.email}</td>
                <td>{result.phone}</td>
                <td>
                    {result.location.street.number + ' ' + result.location.street.name}<br/>
                    {result.location.city + ', ' + result.location.state + ' ' + result.location.postcode}
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;