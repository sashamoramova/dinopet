import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import { TaskForm } from "@/widgets/TaskForm";
import { TaskList } from "@/widgets/TaskList";

export function TaskPage(): JSX.Element {
  return (
    <div>
      <TaskForm />
      <ErrorBoundary>
        <TaskList />
      </ErrorBoundary>
    </div>
  );
}
