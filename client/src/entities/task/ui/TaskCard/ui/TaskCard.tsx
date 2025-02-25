import styles from "./TaskCard.module.css";
import React, { useState } from "react";
import { message as antMessage } from "antd";
import { IRawTaskData, ITask } from "@/entities/task/model";
import { Button } from "@/shared/ui/Button";

type Props = {
  task: ITask;
  onUpdate: (updatedTask: IRawTaskData) => void;
  onDelete: () => void;
};

export const TaskCard: React.FC<Props> = React.memo(
  ({ task, onDelete, onUpdate }) => {
    const initialInputsState = { title: task.title, body: task.body };
    const [isEditing, setIsEditing] = useState(false);
    const [inputs, setInputs] = useState<IRawTaskData>(initialInputsState);

    const isEmptyFormData =
      inputs.title.trim().length === 0 || inputs.body.trim().length === 0;

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
      setInputs((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }

    const handleEdit = () => {
      setIsEditing(true);
    };

    const handleCancel = () => {
      setIsEditing(false);
      setInputs(initialInputsState);
    };

    const handleSave = () => {
      if (isEmptyFormData) {
        antMessage.error("Все поля обязательны к заполнению");
        return;
      }
      setIsEditing(false);
      onUpdate(inputs);
      setInputs(initialInputsState);
    };

    return (
      <div className={styles.taskItem}>
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={inputs.title}
              onChange={onChangeHandler}
              placeholder="Название задачи"
              className={styles.input}
            />
            <input
              type="text"
              name="body"
              value={inputs.body}
              onChange={onChangeHandler}
              placeholder="Описание задачи"
              className={styles.input}
            />
            <Button color="green" type="button" onClick={handleSave}>
              Сохранить
            </Button>
            <Button color="red" type="button" onClick={handleCancel}>
              Закрыть
            </Button>
          </>
        ) : (
          <>
            <h2 className={styles.title}>{task.title}</h2>
            <p className={styles.description}>{task.body}</p>
            <Button color="gray" type="button" onClick={handleEdit}>
              Изменить
            </Button>
            <Button color="red" type="button" onClick={onDelete}>
              Удалить
            </Button>
          </>
        )}
      </div>
    );
  }
);
