import React from 'react'
import EmployeeItem from './EmployeeItem'
import male2 from '../images/male2.jpg';


function EmployeeList() {
  return (
    <div className="employee-list">
        <EmployeeItem/>
        <div className="employee-item1">
         <div className="employee-image"><img src={male2} alt="John"/></div>
          <div className="emloyee-description1">
            <h4>John Williams</h4>
            <h5>VP of Engineering</h5> 
          </div>
            </div>
        
    </div>
  );
}

export default EmployeeList