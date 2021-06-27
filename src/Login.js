import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const Login = ({ login, setLogin }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src="./images/login-event.png" alt="Rel-event" />
        <h1 style={{ fontFamily: "Poppins", fontWeight: "bold" }}>Rel-Event</h1>
        <div className="form">
          <form>
            <div className="grey-text">
              <MDBInput
                icon="envelope"
                label="Name"
                group
                validate
                error="wrong"
                success="right"
                style={{ borderRadius: "5px" }}
              />
              <MDBInput
                icon="lock"
                label="E-mail"
                group
                type="email"
                validate
                style={{ borderRadius: "5px" }}
              />
            </div>
          </form>
        </div>
        <Link to="/">
          <button
            onClick={() => {
              setLogin(true);
            }}
            className="btn"
            style={{ border: "1px solid black" }}
          >
            login / sign up
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 40rem;
  display: grid;
  place-items: center;
  .container {
    height: 38rem;
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  .form {
    margin: 0 auto;
    font-family: "Poppins";
  }
  MDBRow {
    margin: 0 auto;
  }
  img {
    margin-bottom: 2rem;
    margin: 0 auto;
    width: 300px;
    height: 300px;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  button {
    margin-top: 10px;
  }
`;
export default Login;
