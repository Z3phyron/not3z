import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../utils/formik/FormikControl";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import {
  verifyToken,
  resetPassword,
  reset,
} from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import ResetPwSuccess from "../../components/ResetPwSuccess";
import { useNavigate } from "react-router-dom";



const ResetPassword = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();
  const params = useParams()

  console.log(params.token)

  const { email, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    
    const token = params.token

    if (token) {
      dispatch(verifyToken(token));
    }

    // dispatch(reset());
  }, []);

  const validationSchema = Yup.object({
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const userData = {
      email: email,
      ...values
    }
    dispatch(resetPassword(userData))
  };

    
  return (
   
        <Cont>
          <Wrap>
            <Text>
              <div className="header">
                <h3>Reset Password</h3>
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
                        type="password"
                        label="Password"
                        name="password"
                      />
                      <FormikControl
                        control="input"
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
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
`;
const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  background: var(--green);
  color: var(--white);
`;

export default ResetPassword;
