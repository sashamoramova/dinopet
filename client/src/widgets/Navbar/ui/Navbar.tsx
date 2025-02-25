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
    <div className={styles.navbar }>
      <div className={styles.navbarLogo}>
      <Button
        text="dino"
        type="button"
        color="yellow"
        onClick={() => navigate(ROUTES.HOME)}
      />
      </div>
      {user ? (
        <>
        <div className={styles.navbarLinks}>
          <Button
            text="заметки"
            color="green"
            type="button"
            onClick={() => navigate(ROUTES.TASKS)}
          />
          </div>
          <UserCard user={user} />
          <div className={styles.navbarLinks}>
          <Button
            text="выход"
            color="red"
            type="button"
            onClick={signOutHandler}
          />
          </div>
        </>
      ) : (
        <>
        <div className={styles.navbarLinks}>
          <Button
            text="вход"
            color="green"
            type="button"
            onClick={() => navigate(`${ROUTES.AUTH_ROOT}/signin`)}
          />
          </div>
          <div className={styles.navbarLinks}>
          <Button
            text="регистрация"
            color="green"
            type="button"
            onClick={() => navigate(`${ROUTES.AUTH_ROOT}/signup`)}
          />
          </div>
        </>
      )}
    </div>
  );
}
