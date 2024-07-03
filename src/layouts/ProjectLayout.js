import React, { useEffect, useState } from 'react';
import LogosCardWithDescriptions from '../components/LogosCardWithDescriptionsComponent';
import projectService from '../services/projectService';

function ProjectLayout(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    projectService.getProjects().then(res=>{
      setData(res.data);
    }).catch(err=>{
      console.log(err);
    })
    return () => {
      
    };
  }, []);
  useEffect(() => {
    return () => {};
  }, [data]);
    return (
      <>
        <LogosCardWithDescriptions children={data} />
      </>
    );
}

export default ProjectLayout;