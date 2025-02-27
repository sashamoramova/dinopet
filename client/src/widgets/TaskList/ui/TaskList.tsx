import React, { useMemo } from 'react';
import { TaskCard } from '@/entities/task';
import { useTaskList } from '../useTaskList';

export function TaskList(): JSX.Element {
  const { tasks, deleteTask, updateTask } = useTaskList();

  const totalTasks = useMemo(() => {
    console.log('Calculating tasks count....');
    return tasks.length;
  }, [tasks.length]);

  return (
    <div>
      <h1>{totalTasks}</h1>
      {tasks.length > 0 ? (
        tasks.map((el) => (
          <TaskCard
            task={el}
            key={el.id}
            onDelete={() => deleteTask(el.id)}
            onUpdate={(updatedTask) => updateTask(el.id, updatedTask)}
          />
        ))
      ) : (
        <h1>Заметок пока нет :(   </h1>
      )}
    </div>
  );
}

export const memorizedTaskList = React.memo(TaskList);