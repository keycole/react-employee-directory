import React from 'react';
import './style.css';

function Table(props) {
    console.log("The props inside Table = ", props);
    function checkName(employee) {
        return ((employee.name.first).toLowerCase()).startsWith(props.name) || ((employee.name.last).toLowerCase()).startsWith(props.name) 
      }
    
    console.log("The props.sort inside table = ", props.sort);

    // function innerSort() {
    //     console.log("innerSort function has been entered");
    //     props.handleSort();
    // }

        return (
        <table>
            <tbody>
            <tr>
                <th>Face to a Name</th>
                <th>First Name</th>
                <th >Last Name &nbsp;&nbsp;
                    {props.sort === "ascend" ? <i className="fas fa-arrow-circle-down" onClick={props.handleSort}></i> :  <i className="fas fa-arrow-circle-up" onClick={props.handleSort}></i>}
                </th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
            {props.name ? props.results.filter(checkName)
                .map((result, i)=> {return (
                    <tr key={i}>
                    <td>
                        <div id="photoDiv" width="50px">
                        <img 
                            src={result.picture.large}
                            alt="{result.name.first + ' ' + result.name.last}"
                            width="50px"
                        />
                        </div>
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
                )}) : props.results.map((result, i) => (
                    <tr key={i}>
                    <td>
                        <div id="photoDiv" width="50px">
                        <img 
                            src={result.picture.large}
                            alt="{result.name.first + ' ' + result.name.last}"
                            width="50px"
                        />
                        </div>
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
                ))
            }
            </tbody>
        </table>
    );
};

export default Table;