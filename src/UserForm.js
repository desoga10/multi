import React, { useState } from "react";
import Biography from "./steps/Biography";
import Confirm from "./steps/Confirm";
import UserDetails from "./steps/UserDetails";
import Welcome from "./steps/Welcome";
import { Button } from "react-bootstrap";

const UserForm = () => {
  // Steps
  const [activeStep, setActiveStep] = useState(0);

  const getSteps = () => {
    return ["Welcome", "User Details", "Biography", "Confirm"];
  };
  const steps = getSteps();

  // State variables
  const [multiFormValues, setMultiFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    city: "",
    location: "",
  });

  // Navigates to the Next Step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  //Go Back
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //Handle Form Value State As It Changes
  const handleChange = (input) => (e) => {
    console.log(multiFormValues);
    setMultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };

  console.log("steps: " + steps.length);

  return (
      <div>
        <div>
          {activeStep === 0 && (
            <Welcome values={multiFormValues} handleChange={handleChange} />
          )}
          {activeStep === 1 && (
            <UserDetails values={multiFormValues} handleChange={handleChange} />
          )}
          {activeStep === 2 && (
            <Biography values={multiFormValues} handleChange={handleChange} />
          )}
          {activeStep === 3 && <Confirm values={multiFormValues} />}
        </div>
        <div style={{ marginTop: "10%" }}>
          <Button
            disabled={activeStep === 0}
            className="mr-5"
            disabled={activeStep === 0}
            onClick={handleBack}
            style={ activeStep === 3 ? { display:'none'} : { }}
          >
            Back
          </Button>
          <Button
            disabled={activeStep === 3}
            style={ activeStep === 3 ? { display:'none'} : { }}
            className="ml-5"
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 2 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
  );
};

export default UserForm;
