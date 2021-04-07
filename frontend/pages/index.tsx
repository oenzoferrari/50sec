import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useTheme } from "styled-components";

import { useAuth } from "../contexts/User";

import { call as callApi } from "../api/50sec";

import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";

import {
  ActionOption,
  Container,
  FormSelection,
  InputContainer,
} from "../styles";

export default function Home() {
  const { colors } = useTheme();

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [loginSelected, setloginSelected] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmation("");
  }, [loginSelected]);

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [email, password, confirmation]);

  async function handleLogin() {
    setLoading(true);
    const result = await callApi("post", "/user/login", {
      email,
      password,
    });
    setLoading(false);

    if (result === "error") {
      setError(true);
      return;
    }
  }

  async function handleRegister() {
    setLoading(true);
    const result = await callApi("post", "/user", {
      email,
      password,
      confirmation,
    });
    setLoading(false);

    if (result === "error") {
      setError(true);
      return;
    }

    toast.success("Registered! Try to Log In");
  }

  return (
    <Container>
      <Text type="title" weight="bold" color={colors.primary}>
        50sec
      </Text>

      <Text type="subtitle" align="center" color={colors.subtitle}>
        Securely store and generate passwords in a zero knowledge database
      </Text>

      <FormSelection>
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
      </FormSelection>

      <InputContainer>
        <Input
          error={error}
          placeholder="email"
          type="email"
          value={email}
          textChanged={setEmail}
        />

        <Input
          error={error}
          placeholder="password"
          type="password"
          value={password}
          textChanged={setPassword}
        />

        <Input
          error={error}
          placeholder="confirm password"
          type="password"
          value={confirmation}
          textChanged={setConfirmation}
          hidden={loginSelected}
        />

        <Button
          loading={loading}
          onClick={loginSelected ? handleLogin : handleRegister}
          text={loginSelected ? "Login" : "Sign Up"}
        />
      </InputContainer>
    </Container>
  );
}
