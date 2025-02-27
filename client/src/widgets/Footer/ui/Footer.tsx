import React from "react";
import styles from "./Footer.module.css";
// import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    // <footer className={styles.container}>
    //   <p>© 2025 froggyBug</p>
    // </footer>

    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2025 froggyBug</p>
        <div className={styles.footerLinks}>
          <Button
            text="Политика конфиденциальности" // Текст кнопки
            type="button"
            onClick={() => navigate(ROUTES.PRIVACY)}
            color="yellow"
          />
          <Button
            text="Контакты" // Текст кнопки
            type="button"
            onClick={() => navigate(ROUTES.CONTACTS)}
            color="yellow"
          />
        </div>
      </div>
    </footer>
  );
};
