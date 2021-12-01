import { darken, transparentize } from "polished";
import React, { memo, useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { flickeringAnimation } from "../../styles/flickering-animation";

type State = "start" | "loading" | "subscribed";

const FIELD_WIDTH_PX = 496;
const FIELD_HEIGHT_PX = 60;

const Button = styled.button<{ $isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  flex-grow: 0;
  height: ${FIELD_HEIGHT_PX}px;
  background-color: ${({ theme }) => theme.color.accent};
  font-size: 24px;
  font-weight: 700;
  padding: 0 14px;
  border: none;
  color: white;

  > span {
    animation: ${({ $isLoading }) =>
      $isLoading
        ? css`
            ${flickeringAnimation} 1s infinite
          `
        : ""};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.accentDark};
  }
`;
const Input = styled.input`
  flex-grow: 1;
  height: ${FIELD_HEIGHT_PX}px;
  border: none;
  padding: 0 14px;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.accentUltraLight};
  }
`;
const Field = styled.div<{ $state: State }>`
  display: flex;
  width: ${FIELD_WIDTH_PX}px;
  box-shadow: 0px 4px 24px -4px ${({ theme, $state }) => ($state === "subscribed" ? transparentize(0.6, darken(0.1, theme.color.successGreen)) : transparentize(0.75, "#000000"))};
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    outline: 2px solid
      ${({ theme, $state }) =>
        $state === "subscribed"
          ? theme.color.successGreen
          : theme.color.accent};
    outline-offset: -2px;
    box-shadow: 0px 4px 24px -4px rgba(0, 0, 0, 0.45);
  }

  > ${Input} {
    color: ${({ theme, $state }) =>
      $state === "subscribed" ? theme.color.successGreen : ""};
  }

  > ${Button} {
    background-color: ${({ theme, $state }) =>
      $state === "subscribed" ? theme.color.successGreen : ""};
  }
`;
const Form = styled.form``;

export const NewsletterForm = memo(function NewsletterForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<State>("start");

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const email = inputRef.current?.value;

    if (!email) return;

    setState("loading");

    const response = await fetch("/.netlify/functions/subscribe", {
      method: "post",
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    console.log("data", data);

    if (inputRef.current) {
      inputRef.current.type = "text";
      inputRef.current.value = "Congrats for joining our newsletter!";
    }

    setState("subscribed");
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Field $state={state}>
        <Input
          ref={inputRef}
          disabled={state !== "start"}
          type="email"
          placeholder="Join our newsletter"
        />
        <Button
          type="submit"
          disabled={state !== "start"}
          $isLoading={state === "loading"}
        >
          <span>
            {state === "loading"
              ? "🚀"
              : state === "subscribed"
              ? "✅"
              : "Subscribe"}
          </span>
        </Button>
      </Field>
    </Form>
  );
});