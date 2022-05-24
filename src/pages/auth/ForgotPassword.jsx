import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../utils/formik/FormikControl";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword } from "../../features/auth/authSlice";
import ForgotPwSuccess from "../../components/ForgotPwSuccess";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  };

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    dispatch(forgotPassword(values));
  };
  return (
    <>
      {isSuccess ? (
        <Cont>
          <ForgotPwSuccess isLoading={isLoading} />
        </Cont>
      ) : (
        <Cont>
          <Wrap>
            <Text>
              <div className="head">
                <h3>forgot Password</h3>
                <p>
                  Please enter the e-mail address associated with your Note
                  account. We will send you a link to this e-mail address to
                  reset your password.
                </p>
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

                      <Button type="submit" disabled={!formik.isValid}>
                        Submit
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
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

  .head {
    margin-bottom: 20px;
    h3 {
      margin-bottom: 10px;
    }
    p {
      font-size: 10px;
    }
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

export default ForgotPassword;
