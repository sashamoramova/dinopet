import styles from "./AuthForm.module.css";
import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message as antMessage } from 'antd';
import { Button } from '@/shared/ui/Button';
import { signInThunk, signUpThunk, UserValidator } from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { unwrapResult } from '@reduxjs/toolkit';
import { ROUTES } from '@/shared/enums/routes';

type Props = {
  type: string;
};

type InputsType = {
  email: string;
  username: string;
  password: string;
};

const inputsInitialState = {
  email: '',
  username: '',
  password: '',
};

export default function AuthForm({ type }: Props) {
  const [inputs, setInputs] = useState<InputsType>(inputsInitialState);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loading);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function submitHandler(
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) {
    event.preventDefault();
    const { email } = inputs;
    const normalizedEmail = email.toLowerCase();

    if (type === 'signin') {
      const { isValid, error: validationError } =
        UserValidator.validateSignIn(inputs);

      if (!isValid) {
        antMessage.error(validationError);
        return;
      }

      const resultAction = await dispatch(
        signInThunk({ ...inputs, email: normalizedEmail })
      );

      unwrapResult(resultAction);
      setInputs(inputsInitialState);
      navigate(ROUTES.HOME);
    } else {
      const { isValid, error: validationError } =
        UserValidator.validateSignUp(inputs);

      if (!isValid) {
        antMessage.error(validationError);
        return;
      }

      const resultAction = await dispatch(
        signUpThunk({ ...inputs, email: normalizedEmail })
      );

      unwrapResult(resultAction);
      setInputs(inputsInitialState);
      navigate(ROUTES.HOME);
    }
  }

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <input
        value={inputs.email}
        name='email'
        placeholder='email'
        onChange={onChangeHandler}
        type='email'
        required
        autoFocus
      />
      <input
        value={inputs.password}
        name='password'
        placeholder='password'
        onChange={onChangeHandler}
        type='password'
        required
        autoFocus
      />
      {type === 'signup' && (
        <input
          value={inputs.username}
          name='username'
          placeholder='username'
          onChange={onChangeHandler}
          type='username'
          autoFocus
        />
      )}
      <Button
        disabled={loading}
        color='green'
        type='submit'
        text={type === 'signup' ? 'Регистрация' : 'Вход'}
      />
    </form>
  );
}