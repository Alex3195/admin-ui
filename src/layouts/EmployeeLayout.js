import React, { useEffect, useState } from 'react';
import ContactCardsWithSmallPortraits from '../components/ContactCardsWithSmallPortraitsComponent';
import employeeService from '../services/employeeService';

function EmployeeLayout(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    employeeService
      .getEmployee()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
    return (
      <>
        <ContactCardsWithSmallPortraits children={data} />
      </>
    );
}

export default EmployeeLayout;