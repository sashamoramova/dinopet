// import styles from "./DinoCard.module.css";
// import React from "react";
// import { IDino } from "@/entities/dino/model";
// import { Button } from "@/shared/ui/Button";

// type Props = {
//   dino: IDino;
// };

// export const DinoCard: React.FC<Props> = React.memo(({ dino }) => {
//   return (
//     <>
//       <div className={styles.container}>
//         <span className={styles.name}>{dino.name}</span>
//         <span className={styles.skills}>{dino.skills}</span>
//         {dino?.image && (
//           <img
//             src={`${import.meta.env.VITE_IMAGES}${dino.image}`}
//             className={styles.image}
//           />
//         )}
//         <span className={styles.power}>{dino.power}</span>
//         <span className={styles.agility}>{dino.agility}</span>
//         <span className={styles.intellect}>{dino.intellect}</span>
//         <span className={styles.stamina}>{dino.stamina}</span>
//         <span className={styles.magic}>{dino.magic}</span>
//         <Button type="button" text="выбрать" />
//       </div>
//     </>
//   );
// });




import styles from "./DinoCard.module.css";
import React from "react";
import { IDino } from "@/entities/dino/model";

type Props = {
  dino: IDino;
  onClick: () => void;
};

export const DinoCard: React.FC<Props> = React.memo(({ dino, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {dino?.image && (
        <img
          src={`${import.meta.env.VITE_IMAGES}${dino.image}`}
          className={styles.image}
          alt={dino.name}
        />
      )}
      <span className={styles.name}>{dino.name}</span>
    </div>
  );
});
