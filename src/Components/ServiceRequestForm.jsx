import React, { useState, useRef } from "react";
// import { API, graphqlOperation } from 'aws-amplify';
// import { createServiceRequest } from './graphql/mutations';
import ServiceRequestList from "./ServiceRequestList";

const ServiceRequestForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    creationDate: "",
    severity: "",
    resolutionDate: "",
    reporterName: "",
    contactInformation: "",
    location: "",
  });
  const updatedDetails = useRef(formState);
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault()
    console.log("formState:", formState);
    setShowDetails(true);
    updatedDetails.current = formState;
    alert('Service request created successfully. Check for your details below!');
  };
  const handleClear =() =>{
    setShowDetails(false);
    setFormState({
      name: "",
      description: "",
      creationDate: "",
      severity: "",
      resolutionDate: "",
      reporterName: "",
      contactInformation: "",
      location: "",
    })
  }
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await API.graphql(graphqlOperation(createServiceRequest, { input: formState }));
  //       setFormState({
  //         name: '',
  //         description: '',
  //         creationDate: '',
  //         severity: '',
  //         resolutionDate: '',
  //         reporterName: '',
  //         contactInformation: '',
  //         location: ''
  //       });
  //       alert('Service request created successfully');
  //     } catch (err) {
  //       console.error('Error creating service request:', err);
  //     }
  //   };
  // onSubmit={handleSubmit}
  return (
    <>
      <div>
        <h1>Service Request Management</h1>
        <h3>Request Details</h3>
        <form align="center">
          <label className="request-detail-col">
            Service Request Name :{" "}
            <input
              name="name"
              value={formState.name}
              onChange={handleChange}
              aria-label="Service Request Name"
              required
            />
          </label>
          <label className="request-detail-col">
            Service Request Description :{" "}
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label className="request-detail-col">
            {" "}
            Creation Date :{" "}
            <input
              name="creationDate"
              value={formState.creationDate}
              onChange={handleChange}
              type="date"
              required
            />
          </label>
          <label className="request-detail-col">
            Severity :{" "}
            <input
              name="severity"
              value={formState.severity}
              onChange={handleChange}
              required
            />
          </label>
          <label className="request-detail-col">
            {" "}
            Resolution date :{" "}
            <input
              name="resolutionDate"
              value={formState.resolutionDate}
              onChange={handleChange}
              type="date"
            />
          </label>
        </form>
        <h3>Your Details</h3>
        <form>
          <label className="request-detail-col">
            Reporter Name :{" "}
            <input
              name="reporterName"
              value={formState.reporterName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="request-detail-col">
            {" "}
            Contact Information :{" "}
            <input
              name="contactInformation"
              value={formState.contactInformation}
              onChange={handleChange}
              required
            />{" "}
          </label>
          <label className="request-detail-col">
            {" "}
            Location :{" "}
            <input
              name="location"
              value={formState.location}
              onChange={handleChange}
              required
            />{" "}
          </label>
          <button type="submit" onClick={handleClick}>
            Create
          </button>
          <button type="submit" className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>

      <ServiceRequestList
        updatedForm={updatedDetails}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </>
  );
};

export default ServiceRequestForm;
