import React from "react";
import { Form } from "react-bootstrap";

const UserDetails = ({ values, handleChange }) => {
  return (
    <div>
      <Form className="mt-5">
        <h4>Enter Your Details</h4>
        <Form.Group controlId="formBasicEmail" className="mt-5">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            type="text"
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            type="text"
            placeholder="Enter Last Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange("email")}
            defaultValue={values.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserDetails;
