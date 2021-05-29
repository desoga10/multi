import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Welcome = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h4>Welcome To Multi Step Form Using React...</h4>
      <Button
        onClick={() => setOpen(!open)}
        style={
          open === true
            ? { display: "none" }
            : { display: "flex", margin: "auto" }
        }
      >
        Read More
      </Button>
      {open ? (
        <div className="m-5 p-5 container">
          In this tutorial, I will teach you how to create a multi step form
          using React and React Bootstrap. Every step is explained in a clear
          and precise manner. Please watch till the end...
        </div>
      ) : null}
    </>
  );
};

export default Welcome;
