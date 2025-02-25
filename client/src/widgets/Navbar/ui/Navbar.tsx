import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { signOutThunk, UserCard } from "@/entities/user";
import { ROUTES } from "@/shared/enums/routes";
import { Button } from "@/shared/ui/Button";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";

export default function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const signOutHandler = async () => {
    dispatch(signOutThunk());
  };

  return (
    <div className={styles.container}>
      <Button
        text="Главная"
        color="green"
        type="button"
        onClick={() => navigate(ROUTES.HOME)}
      />
      {user ? (
        <>
          <Button
            text="Задачи"
            color="green"
            type="button"
            onClick={() => navigate(ROUTES.TASKS)}
          />
          <UserCard user={user} />
          <Button
            text="Выход"
            color="red"
            type="button"
            onClick={signOutHandler}
          />
        </>
      ) : (
        <>
          <Button
            text="Вход"
            color="green"
            type="button"
            onClick={() => navigate(`${ROUTES.AUTH_ROOT}/signin`)}
          />
          <Button
            text="Регистрация"
            color="green"
            type="button"
            onClick={() => navigate(`${ROUTES.AUTH_ROOT}/signup`)}
          />
        </>
      )}
    </div>
  );
}
