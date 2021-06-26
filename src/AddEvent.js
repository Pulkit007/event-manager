import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const AddEvent = () => {
  return (
    <Wrapper>
      <section>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="attach">Event Name</Form.Label>
            <Form.Control type="text" placeholder="Enter event name" />
          </Form.Group>

          <Form.Group controlId="formBasicDuration">
            <Form.Label className="attach">Duration</Form.Label>
            <Form.Control type="text" placeholder="Duration" />
          </Form.Group>

          <Form.Group controlId="formBasicDate">
            <Form.Label className="attach">Date</Form.Label>
            <Form.Control type="text" placeholder="Date" />
          </Form.Group>

          <Form.Group controlId="formBasicPartipants">
            <Form.Label className="attach">No of Participants</Form.Label>
            <Form.Control type="text" placeholder="No of participants" />
          </Form.Group>

          <Form.Group controlId="formBasicOrganizers">
            <Form.Label className="attach">Organizer</Form.Label>
            <Form.Control type="text" placeholder="Organizer" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Event
          </Button>
        </Form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .attach {
    font-weight: 600;
    font-family: Poppins;
  }
  section {
    padding-top: 40px;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

export default AddEvent;
