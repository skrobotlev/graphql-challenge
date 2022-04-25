import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { LOGIN } from "../mutations/user";
import { DASHBOARD } from "../router/consts";
import "../../src/global.scss";

const LoginDiv = styled.div`
  max-width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 1px solid lightgray;
  border-radius: 4px;
`;


const LoginUnput = styled.input`
padding: 5px;
margin: 5px;
border-radius: 8px;

:focus {
  outline: none;
}
`;
export const LogButton = styled.button`
width: fit-content;
background: orange;
color: white;
font-size: 24px;
border-radius: 8px;
border: none;
padding: 5px 10px;
margin: 5px 10px;
`;

const LoginPage = () => {
    const history = useHistory();
    const [login] = useMutation(LOGIN);
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");


    return (
        <LoginDiv>
            <LoginForm>
                <LoginUnput
                    value={username}
                    placeholder="Login"
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                />
                <LoginUnput
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                    type="text"
                />
                <LogButton
                    onClick={(e) => {
                        e.preventDefault();
                        login({
                            variables: {
                                username,
                                password,
                            },
                        }).then((data) => {
                            console.log(data.data.login.token);
                            localStorage.setItem("token", data.data.login.token);
                            const token = localStorage.getItem("token");
                            token && history.push(DASHBOARD);
                        });
                    }}
                >
                    LOGIN
                </LogButton>
            </LoginForm>
        </LoginDiv>
    );
};

export default LoginPage;
