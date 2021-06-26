import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { useEffect } from "react";
import upcoming from "./upcoming_event";

const UpcomingEvent = () => {
  return (
    <Wrapper>
      <main>
        <h2>Upcoming Events</h2>
        <Table responsive>
          <thead className="thead-dark">
            <tr>
              <th>Event Name</th>
              <th>Duration</th>
              <th>Date</th>
              <th>No of participants</th>
              <th>Organizer</th>
              <th>Registered</th>
            </tr>
          </thead>
          <tbody>
            {upcoming.map((event, index) => {
              const {
                name,
                duration,
                date,
                no_of_participants,
                organizer,
                isRegistered,
              } = event;
              return (
                <tr style={{ fontWeight: "normal" }} key={index}>
                  <th>{name}</th>
                  <th>{duration}</th>
                  <th>{date}</th>
                  <th>{no_of_participants}</th>
                  <th>{organizer}</th>
                  <th>
                    {isRegistered ? (
                      <p>Registered</p>
                    ) : (
                      <button
                        onClick={() => {
                          event.isRegistered = true;
                        }}
                      >
                        Register
                      </button>
                    )}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  tr th {
    font-weight: 400;
    font-family: sans-serif;
  }
  thead th {
    background-color: #007bff !important;
    border-bottom: none;
    font-weight: 500;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    padding-bottom: 15px;
    font-size: 2.5rem;
    font-weight: 500;
  }
  main {
    width: 90vw;
    margin: 0 auto;
    padding-top: 40px;
    max-width: 1170px;
  }
`;

export default UpcomingEvent;
