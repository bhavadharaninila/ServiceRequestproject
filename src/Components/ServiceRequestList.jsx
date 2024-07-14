import React, { useEffect, useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
// import { listServiceRequests } from './graphql/queries';


const ServiceRequestList = (props) => {
  const { updatedForm } = props;
 
  return (
<div>
    <h2>Service Requests</h2>
      <ul>
       
          <li key={updatedForm.current.id}>
            <h3>{updatedForm.current.name}</h3>
            <p>{updatedForm.current.description}</p>
            <p>Created on: {updatedForm.current.creationDate}</p>
            <p>Severity: {updatedForm.current.severity}</p>
            <p>Resolution Date: {updatedForm.current.resolutionDate}</p>
            <p>Reported by: {updatedForm.current.reporterName}</p>
            <p>Contact: {updatedForm.current.contactInformation}</p>
            <p>Location: {updatedForm.current.location}</p>
          </li>
        
      </ul>
    </div>
  );
};

export default ServiceRequestList;
