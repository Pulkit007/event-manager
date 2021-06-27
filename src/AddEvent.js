import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createEvent } from "./api/Api";

const AddEvent = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState(0);
  const [organizer, setOrganizer] = useState("");
  return (
    <Wrapper>
      <section>
        <h2>Add a Event</h2>
        <div className="underline"></div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="attach">Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDuration">
            <Form.Label className="attach">Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDate">
            <Form.Label className="attach">Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPartipants">
            <Form.Label className="attach">No of Participants</Form.Label>
            <Form.Control
              type="text"
              placeholder="No of participants"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicOrganizers">
            <Form.Label className="attach">Organizer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Organizer"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const item = {
                name,
                duration,
                date,
                no_of_participants: participants,
                organizer,
                isRegistered: false,
              };
              console.log(item);
              createEvent(item)
                .then((res) => {
                  if (res.status === 200) {
                    alert("Event Created");
                  } else {
                    alert("Something went wrong, please try again");
                  }
                  setName("");
                  setDuration("");
                  setDate("");
                  setParticipants(0);
                  setOrganizer("");
                })
                .catch((err) => console.log(err));
            }}
          >
            Add Event
          </Button>
        </Form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .underline {
    background-color: #007bff;
    width: 220px;
    height: 1.5px;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    padding-bottom: 15px;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  }
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
