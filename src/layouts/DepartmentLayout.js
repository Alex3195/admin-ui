import React, { useEffect, useState } from 'react';
import TableComponent from '../components/TableComponent';
import departmentService from '../services/departmentService';

function DepartmentLayout(props) {
  const [data, setData] = useState([]);;
  useEffect(() => {
    departmentService.getDepartments().then((res)=>{
        setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
    return () => {
      
    };
  }, []);
    return (
      <>
        <TableComponent  children={data} />
      </>
    );
}

export default DepartmentLayout;