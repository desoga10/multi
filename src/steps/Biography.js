import React from "react";
import { Form } from "react-bootstrap";

const Biography = ({ values, handleChange }) => {
  return (
    <div>
      <Form className="mt-5">
        <h4>Enter Your Biography</h4>
        <Form.Group controlId="formBasicEmail" className="mt-5">
          <Form.Label>Job</Form.Label>
          <Form.Control
            onChange={handleChange("job")}
            defaultValue={values.job}
            type="text"
            placeholder="Enter Job"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={handleChange("city")}
            defaultValue={values.city}
            type="text"
            placeholder="Enter City"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={handleChange("location")}
            defaultValue={values.location}
            type="email"
            placeholder="Enter Location"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Biography;
