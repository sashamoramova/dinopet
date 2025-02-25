import React, { ReactNode } from "react";

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error:", error, errorInfo);
    //? отправка ошибки для записи
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Упс! Что-то пошло не так.</h1>
          <h4>Пожалуйста, не обижайтесь, собани!</h4>
        </div>
      );
    }

    return this.props.children;
  }
}
