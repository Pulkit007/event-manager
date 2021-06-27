import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Login = ({ login, setLogin }) => {
  return (
    <Wrapper>
      <div className="form-div">
        <div className="outer-div">
          <div className="login-image"></div>
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{ border: "1px solid grey" }}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              style={{ border: "1px solid grey" }}
              type="email"
              placeholder="E-mail"
            />
          </Form.Group>
          <Link to="/">
            <Button
              className="btn"
              onClick={() => {
                setLogin(true);
              }}
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Link>
        </Form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  font-family: "Roboto";
  align-items: center;
  .form-div {
    width: 40%;
    height: 4rem;
  }
  .outer-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-image {
    height: 200px;
    width: 200px;

    background-image: url("./images/login-event.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  img {
    height: 200px;
    width: 200px;
  }
`;

export default Login;
