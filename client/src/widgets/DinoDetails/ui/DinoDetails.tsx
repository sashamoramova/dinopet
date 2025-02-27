import styles from "./DinoDetails.module.css";
import React from "react";
import { IDino } from "@/entities/dino/model";
import { Button } from "@/shared/ui/Button";

type Props = {
  dino: IDino | null;
  onSelect: () => void;
};

export const DinoDetails: React.FC<Props> = ({ dino, onSelect }) => {
  if (!dino) return <div className={styles.details}>Выберите динозавра</div>;

  return (
    <div className={styles.details}>
      <h2>{dino.name}</h2>
      {dino?.image && (
        <img
          src={`${import.meta.env.VITE_IMAGES}${dino.image}`}
          className={styles.image}
          alt={dino.name}
        />
      )}
      <p>{dino.skills}</p>
      <div className={styles.stats}>
        <span>Сила: {dino.power}</span>
        <span>Ловкость: {dino.agility}</span>
        <span>Интеллект: {dino.intellect}</span>
        <span>Выносливость: {dino.stamina}</span>
        <span>Колдовство: {dino.magic}</span>
      </div>
      <Button type="button" text="Выбрать" onClick={onSelect} />
    </div>
  );
};