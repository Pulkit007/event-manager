import React from "react";
import styled from "styled-components";
import "./index.css";

const Home = () => {
  return (
    <Wrapper>
      <section>
        <div style={{ padding: "40px 50px" }}>
          <h1 style={{ paddingBottom: "30px" }}>Welcome to Event Manager</h1>
          <h3>See the events you registered in</h3>
          <button className="btn">Your Events</button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h1 {
    font-size: 4.2rem;
  }
  section {
    background-color: #007bff;
    padding-top: 40px;
    width: 100vw;
    padding: 1rem 2rem;
    position: relative;
    height: 40rem;
  }
  button {
    border: 1px solid black;
  }
`;

export default Home;
