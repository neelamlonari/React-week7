import React from 'react'
import xyz from '../images/male.jpeg';

function EmployeeItem() {
  return (
    <div className="employee-item">
     <div className="employee-image"><img src={xyz} alt="james"/></div>
      <div className="emloyee-description">
        <h4>James King</h4>
        <h5>President and CEO </h5> 
      </div>
       </div>
    );
}
export default EmployeeItem;