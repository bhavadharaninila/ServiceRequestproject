import React, { useState } from 'react';
import { graphqlOperation } from '@aws-amplify/api-graphql';
// import { API } from 'aws-amplify';
import {API} from '@aws-amplify/api'
import { createServiceRequest } from '../graphql/mutations';

// const client = generateClient();
const ServiceRequestForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    creationDate: '',
    severity: '',
    resolutionDate: '',
    reporterName: '',
    contactInformation: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger
    try {
      // console.log(client)
      // debugger
      await API.graphql(graphqlOperation(createServiceRequest, { input: formState }));
      debugger;
      setFormState({
        name: '',
        description: '',
        creationDate: '',
        severity: '',
        resolutionDate: '',
        reporterName: '',
        contactInformation: '',
        location: ''
      });
      alert('Service request created successfully');
    } catch (err) {
      console.error('Error creating service request:', err);
    }
  };

  return (
    <div>
    <h1>Service Request Management</h1>
    <h3>Request Details</h3>
    <form align="center" onSubmit={handleSubmit}>  
    <label className='request-detail-col'>
    Service Request Name : <input name="name" value={formState.name} onChange={handleChange} aria-label="Service Request Name" required />
    </label>
      <label className='request-detail-col'>Service Request Description : <textarea name="description" value={formState.description} onChange={handleChange} required></textarea></label>
      <label className='request-detail-col'> Creation Date : <input name="creationDate" value={formState.creationDate} onChange={handleChange} type="date" required /></label>
      <label className='request-detail-col'>Severity : <input name="severity" value={formState.severity} onChange={handleChange}  required /></label>
      <label className='request-detail-col'> Resolution date : <input name="resolutionDate" value={formState.resolutionDate} onChange={handleChange} type="date" /></label>
     <h3>Your Details</h3>
      <label className='request-detail-col'>Reporter Name : <input name="reporterName" value={formState.reporterName} onChange={handleChange}  required /></label>
      <label className='request-detail-col'> Contact Information : <input name="contactInformation" value={formState.contactInformation} onChange={handleChange} required />  </label>
      <label className='request-detail-col'> Location :  <input name="location" value={formState.location} onChange={handleChange} required /> </label>
      <button type="submit">Create Service Request</button>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
