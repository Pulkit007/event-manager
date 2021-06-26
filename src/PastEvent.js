import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import past from "./past_event";

const PastEvent = () => {
  return (
    <Wrapper>
      <main>
        <h2>Past Events</h2>
        <Table responsive>
          <thead>
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
  main {
    padding-top: 40px;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

export default PastEvent;
