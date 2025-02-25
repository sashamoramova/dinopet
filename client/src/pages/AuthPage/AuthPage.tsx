import { Loader } from "@/shared/ui/Loader";
import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

const AuthForm = React.lazy(
  () => import("@/features/auth/ui/AuthForm/AuthForm")
);

export function AuthPage(): JSX.Element {
  const { type } = useParams();

  if (!type) {
    return <div>Неверный параметр</div>;
  }

  return (
    <>
      <Suspense fallback={<Loader loading={true} />}>
        <AuthForm type={type} />
      </Suspense>
    </>
  );
}
