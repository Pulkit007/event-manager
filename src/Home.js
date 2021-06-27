import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import "./index.css";

const Home = ({ login }) => {
  return (
    <Wrapper>
      <section>
        <div style={{ padding: "0px 50px" }}>
          <h1 style={{ paddingBottom: "20px" }}>Welcome to Rel-Event</h1>
          <h3 style={{ paddingBottom: "10px" }}>
            See the events you registered in
          </h3>
          <Link to="/myevents">
            <button className="btn">Your Events</button>
          </Link>
        </div>
        <div>
          <img
            style={{
              width: "45%",
              margin: "-70px auto",
              height: "550px",
              float: "right",
              marginRight: "90px",
            }}
            src="./images/event_home.png"
            alt="home_cover"
          />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h1 {
    font-size: 3.8rem;
    font-family: "Poppins", sans-serif;
  }
  h3 {
    font-family: "Poppins", sans-serif;
  }
  section {
    color: white;
    background-color: #007bff;
    padding-top: 40px;
    width: 100vw;
    padding: 1rem 2rem;
    position: relative;
    height: 40rem;
  }
  button {
    border: 1px solid white;
    color: white;
  }
`;

export default Home;
