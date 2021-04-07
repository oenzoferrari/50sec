import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useTheme } from "styled-components";

import { call as callApi } from "../../api/50sec";

import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, InputContainer } from "../../styles";
import { cleanCookie } from "../../util/cookies";

export default function Vault() {
  const { colors } = useTheme();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [service, setService] = useState("");
  const [login, setLogin] = useState("");

  const [services, setServices] = useState([]);

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [service, login]);

  useEffect(() => {
    handleServiceFetching();
  }, []);

  async function handleServiceCreation() {
    setLoading(true);
    const result = await callApi("post", "/service", {
      name: service,
      login,
    });
    setLoading(false);

    if (result === "error") {
      setError(true);
      return;
    }

    setService("");
    setLogin("");

    toast.success("Password generated with success =)");

    handleServiceFetching();
  }

  async function handleServiceFetching() {
    setLoading(true);
    const result = await callApi("get", "/service", null);
    setLoading(false);

    if (result === "error") {
      setError(true);
      return;
    }

    const { services } = result.data;

    setServices(services);
  }

  async function handleLogout() {
    cleanCookie();
  }

  return (
    <Container>
      <Text type="title" weight="bold" color={colors.primary}>
        50sec
      </Text>

      <Text
        style={{ marginBottom: "15px", cursor: "pointer" }}
        type="text"
        weight="bold"
        color={colors.subtitle}
        onClick={handleLogout}
      >
        Log out
      </Text>

      <InputContainer>
        <Input
          error={error}
          placeholder="service"
          type="text"
          value={service}
          textChanged={setService}
        />

        <Input
          error={error}
          placeholder="login"
          type="text"
          value={login}
          textChanged={setLogin}
        />

        <Button
          onClick={handleServiceCreation}
          loading={loading}
          text={"Generate"}
        />
      </InputContainer>

      <div
        style={{
          width: "50%",
          border: `1px solid ${colors.subtitle}`,
          margin: "30px 0px 30px 0px",
        }}
      />

      <div
        style={{
          display: "grid",
          width: "50%",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        {services.map((service) => (
          <div
            style={{
              padding: "30px",
              backgroundColor: colors.onPrimary,
            }}
          >
            <Text type="subtitle" style={{ marginBottom: "15px" }}>
              {service.name}
            </Text>

            <Text weight="bold">Password</Text>
            <Text>{service.password}</Text>
          </div>
        ))}
      </div>
    </Container>
  );
}
