import axios from "axios";
import { decode } from "jsonwebtoken";

import { useEffect, useState } from "react";
import { getCookie } from "react-use-cookie";
import { toast } from "react-toastify";

import {
  ActionOption,
  Button,
  Container,
  FormChooseContainer,
  Input,
  InputContainer,
  Subtitle,
  Title,
} from "../styles";

export default function Home() {
  const [loginSelected, setloginSelected] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");

  const [payload, setPayload] = useState<string | { [key: string]: any }>();

  useEffect(() => {
    console.log(payload);

    if (payload) {
      alert("Logged In!");
    }
  }, [payload]);

  function handleEmail({ target }) {
    setEmail(target.value);
  }

  function handlePassword({ target }) {
    setPassword(target.value);
  }

  function handleConfirmation({ target }) {
    setConfirmation(target.value);
  }

  async function handleLogin() {
    try {
      await axios.post(
        "http://localhost:4000/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      }

      console.log(error);

      return;
    }

    const token = getCookie("token");

    setPayload(decode(token));
  }

  async function handleRegister() {
    try {
      await axios.post(
        "http://localhost:4000/user",
        {
          email,
          password,
          confirmation,
        },
        { withCredentials: true }
      );
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      }

      console.log(error);

      return;
    }

    toast.success("Registered! Try to Log In");
  }

  return (
    <Container>
      <Title>50sec</Title>

      <Subtitle>
        Securely store and generate passwords in a zero knowledge database
      </Subtitle>

      <FormChooseContainer>
        <ActionOption
          selected={loginSelected}
          onClick={() => setloginSelected(true)}
        >
          Login
        </ActionOption>

        <ActionOption
          selected={!loginSelected}
          onClick={() => setloginSelected(false)}
        >
          Sign Up
        </ActionOption>
      </FormChooseContainer>

      <InputContainer>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={handleEmail}
        />

        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />

        {!loginSelected && (
          <Input
            placeholder="confirm password"
            type="password"
            value={confirmation}
            onChange={handleConfirmation}
          />
        )}

        {loginSelected ? (
          <Button onClick={handleLogin}>Login</Button>
        ) : (
          <Button onClick={handleRegister}>Sign Up</Button>
        )}
      </InputContainer>
    </Container>
  );
}
