import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Navigate, Outlet } from "react-router-dom";
import FormikControl from "../../utils/formik/FormikControl";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
`;

const SignIn = () => {
  let [color, setColor] = useState("#ffffff");
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth);
  console.log(user);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    dispatch(signIn(values));
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isLoading ? (
        <Cont>
          <PulseLoader
            color={color}
            loading={isLoading}
            css={override}
            size={150}
          />
        </Cont>
      ) : (
        <Cont>
          <Wrap>
            <Text>
              <div className="header">
                <h3>Sign In</h3>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form>
                      <FormikControl
                        control="input"
                        type="email"
                        label="Email"
                        name="email"
                      />
                      <FormikControl
                        control="input"
                        type="password"
                        label="Password"
                        name="password"
                      />
                      <Button type="submit" disabled={!formik.isValid}>
                        Submit
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
              <p>
                <Link to="/forgotPassword">Forgot Password? </Link>
              </p>
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </Text>
          </Wrap>
        </Cont>
      )}
    </>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5%;
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  width: 50%;
  margin: auto;
`;

const Text = styled.div`
  width: 100%;
  p {
    margin-top: 10px;
  }
`;
const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  background: var(--green);
  color: var(--white);
`;

export default SignIn;
