import React, { SyntheticEvent, useState } from "react";
import { UserType, UserWithTokenType } from "../../../../entities/user/model";
import { useNavigate } from "react-router-dom";
import UserValidator from "../../../../entities/user/model/User.validator";
import { message as antMessage } from "antd";
import UserApi from "../../../../entities/user/api/UserApi";
import { setAccessToken } from "../../../../shared/lib/axiosInstance";
import { IApiResponseSuccess } from "../../../../shared/types";
import Button from "../../../../shared/ui/Button/Button";

type Props = {
  type: "signin" | "signup";
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

type InputsType = {
  email: string;
  username: string;
  password: string;
};

const inputsInitialState = {
  email: "",
  username: "",
  password: "",
};

export default function AuthForm({ type, setUser }: Props) {
  const [inputs, setInputs] = useState<InputsType>(inputsInitialState);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function submitHandler(
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) {
    event.preventDefault();
    const { email } = inputs;
    setLoading(true);
    const normalizedEmail = email.toLowerCase();

    if (type === "signin") {
      const { isValid, error: validationError } =
        UserValidator.validateSignIn(inputs);

      if (!isValid) {
        antMessage.error(validationError);
        return;
      }

      try {
        const response = await UserApi.signIn({
          ...inputs,
          email: normalizedEmail,
        });

        const { statusCode, error, message, data } =
          response as IApiResponseSuccess<UserWithTokenType>;

        if (error) {
          antMessage.error(error);
          return;
        }

        if (statusCode === 200) {
          antMessage.success(message);
          setUser(data.user);
          setAccessToken(data.accessToken);
          setInputs(inputsInitialState);
          navigate("/");
        }
      } catch (error) {
        if (error instanceof Error) {
          antMessage.error(error.message);
        } else {
          antMessage.error("An unexpected error");
        }
      } finally {
        setLoading(false);
      }
    } else {
      const { isValid, error: validationError } =
        UserValidator.validateSignUp(inputs);

      if (!isValid) {
        antMessage.error(validationError);
        return;
      }

      try {
        const response = await UserApi.signUp({
          ...inputs,
          email: normalizedEmail,
        });

        const { statusCode, error, message, data } =
          response as IApiResponseSuccess<UserWithTokenType>;

        if (error) {
          antMessage.error(error);
          return;
        }

        if (statusCode === 200) {
          antMessage.success(message);
          setUser(data.user);
          setAccessToken(data.accessToken);
          setInputs(inputsInitialState);
          navigate("/");
        }
      } catch (error) {
        if (error instanceof Error) {
          antMessage.error(error.message);
        } else {
          antMessage.error("An unexpected error");
        }
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        value={inputs.email}
        name="email"
        placeholder="email"
        onChange={onChangeHandler}
        type="email"
        required
        autoFocus
      />
      <input
        value={inputs.password}
        name="password"
        placeholder="password"
        onChange={onChangeHandler}
        type="password"
        required
        autoFocus
      />
      {type === "signup" && (
        <input
          value={inputs.username}
          name="username"
          placeholder="username"
          onChange={onChangeHandler}
          type="username"
          autoFocus
        />
      )}
      <Button
        disabled={loading}
        color="green"
        type="submit"
        text={type === "signup" ? "Регистрация" : "Вход"}
      />
    </form>
  );
}
