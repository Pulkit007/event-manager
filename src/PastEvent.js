import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

const PastEvent = ({ past }) => {
  return (
    <Wrapper>
      <main>
        <h2>Past Events</h2>
        <Table responsive>
          <thead className="thead-dark">
            <tr>
              <th>Event Name</th>
              <th>Duration</th>
              <th>Date</th>
              <th>No of participants</th>
              <th>Organizer</th>
            </tr>
          </thead>
          <tbody>
            {past.map((event, index) => {
              const { name, duration, date, no_of_participants, organizer } =
                event;
              return (
                <tr key={index}>
                  <th>{name}</th>
                  <th>{duration}</th>
                  <th>{date}</th>
                  <th>{no_of_participants}</th>
                  <th>{organizer}</th>
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
    padding-top: 40px;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

export default PastEvent;
