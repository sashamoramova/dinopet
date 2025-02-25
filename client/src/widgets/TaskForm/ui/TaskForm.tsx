import styles from "./TaskForm.module.css";
import React, { useState } from "react";
import { message as antMessage } from "antd";
import { createTaskThunk, IRawTaskData } from "@/entities/task";
import { Button } from "@/shared/ui/Button";
import { Loader } from "@/shared/ui/Loader";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { unwrapResult } from "@reduxjs/toolkit";

const initialInputsState = { title: "", body: "" };

export const TaskForm: React.FC = () => {
  const [inputs, setInputs] = useState<IRawTaskData>(initialInputsState);
  const loading = useAppSelector((state) => state.task.loading);
  const dispatch = useAppDispatch();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const isEmptyFormData =
    inputs.title.trim().length === 0 || inputs.body.trim().length === 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEmptyFormData) {
      antMessage.error("Все поля обязательны к заполнению");
      return;
    }

    const resultAction = await dispatch(createTaskThunk(inputs));
    unwrapResult(resultAction);
    setInputs(initialInputsState);
  };

  return (
    <Loader loading={loading}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputs.title}
          name="title"
          onChange={onChangeHandler}
          placeholder="Название задачи"
        />
        <input
          type="text"
          value={inputs.body}
          name="body"
          onChange={onChangeHandler}
          placeholder="Описание задачи"
        />
        <Button type="submit" color="green">
          Добавить задачу
        </Button>
      </form>
    </Loader>
  );
};

export const memorizedTaskForm = React.memo(TaskForm);
