import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const Login = ({ login, setLogin }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src="./images/login-event.png" alt="Rel-event" />
        <h1>Rel-Event</h1>
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
              />
              <MDBInput
                icon="lock"
                label="E-mail"
                group
                type="email"
                validate
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
          >
            login / sign up
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
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
`;
export default Login;
