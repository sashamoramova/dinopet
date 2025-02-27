import styles from "./MainPage.module.css";
import { ROUTES } from "@/shared/enums/routes";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";


export default function MainPage(): JSX.Element {
  const navigate = useNavigate();


  return (
    <div className={styles.mainPage}>
      <div className={styles.background}>
        {/* <img
          src="background-desktop.png"
          alt="Фон"
          className={styles.backgroundImage}
        /> */}
        <img src="dino1.png" alt="Динозавр 1" className={styles.dino1} />
        <img src="dino2.png" alt="Динозавр 2" className={styles.dino2} />
        <img src="dino3.png" alt="Динозавр 3" className={styles.dino3} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>ДиноИгра</h1>
        <p className={styles.subtitle}>Помоги динозаврам спасти мир!</p>
        <div className={styles.startButton}>
          <Button
            text="Начать"
            type="button"
            onClick={() => navigate(ROUTES.DINOS)}
            color="yellow"
          />
        </div>
      </div>
    </div>
  );
}
