import React, { useEffect, useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
// import { listServiceRequests } from './graphql/queries';


const ServiceRequestList = (props) => {
  const { updatedForm, showDetails, setShowDetails } = props;
 
  return (
<div >
    {showDetails && <><h2>Service Requests</h2>
      <ul>
          <li key={updatedForm.current.id}>
            <h3>{updatedForm.current.name}</h3>
            <p>{updatedForm.current.description}</p>
            <p><h4>Created on:</h4> {updatedForm.current.creationDate}</p>
            <p><h4>Severity:</h4> {updatedForm.current.severity}</p>
            <p><h4>Resolution Date:</h4> {updatedForm.current.resolutionDate}</p>
            <p><h4>Reported by:</h4> {updatedForm.current.reporterName}</p>
            <p><h4>Contact: </h4>{updatedForm.current.contactInformation}</p>
            <p><h4>Location:</h4> {updatedForm.current.location}</p>
          </li>
      </ul></>}
    </div>
  );
};

export default ServiceRequestList;
