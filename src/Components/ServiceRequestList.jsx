import React, { useEffect, useState } from 'react';
import { graphqlOperation } from '@aws-amplify/api-graphql';
// import { API } from '@aws-amplify/api';
import {generateClient} from '@aws-amplify/api'
import { listServiceRequests } from '../graphql/queries';

// let request = {
//   name:"hgjg", 
//   description: "hhhg",
//  creationDate: "2/10/2020",
//  severity: "high",
//  resolutionDate : '3/10/2020',
//  reporterName: 'bhavi',
//  contactInformation: '0449990057',
//  location: 'melbourne'}

const client = generateClient();
const ServiceRequestList = () => {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    fetchServiceRequests();
  }, []);

  const fetchServiceRequests = async () => {
    debugger;
    try {
      const response = await client.graphql(graphqlOperation(listServiceRequests));
      debugger
      setServiceRequests(response.data.listServiceRequests.items);
    } catch (err) {
      console.error('Error fetching service requests:', err);
    }
  };


  return (
    <div>
      <h2>Service Requests</h2>
      <ul>
        {serviceRequests.map((request) => (         
           <li key={request.id}>
            <h3>{request.name}</h3>
            <p>{request.description}</p>
            <p>Created on: {request.creationDate}</p>
            <p>Severity: {request.severity}</p>
            <p>Resolution Date: {request.resolutionDate}</p>
            <p>Reported by: {request.reporterName}</p>
            <p>Contact: {request.contactInformation}</p>
            <p>Location: {request.location}</p>
          </li>
))}
      </ul>
    </div>
  );
};

export default ServiceRequestList;
