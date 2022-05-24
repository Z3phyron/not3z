import React, {useState} from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs"
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--green);
`;

const ForgotPwSuccess = ({ isLoading }) => {
    let [color, setColor] = useState("#ffffff");
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
            <div className="wrap">
              <div className="icon">
                <BsCheck2Circle />
              </div>
              <div className="message">
                Please check your email for instructions on how to recorver your
                password.
              </div>
            </div>
          </Cont>
        )}
      </>
    );
};

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--green);

  .icon {
    font-size: 60px;
    margin-bottom: 20px;

  }

  .message {
    font-size: 20px;
  }
`;

export default ForgotPwSuccess;
