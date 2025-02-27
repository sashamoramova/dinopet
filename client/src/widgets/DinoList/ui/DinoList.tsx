// import React from 'react';
// import { DinoCard } from '@/entities/dino';
// import { useDinoList } from '../useDinoList';
// import styles from './DinoList.module.css'

// export function DinoList(): JSX.Element {
//   const { dinos } = useDinoList();


//   return (
//     <div className={styles.container}>
//       {dinos.length > 0 ? (
//         dinos.map((el) => (
//           <DinoCard
//             dino={el}
//             key={el.id}
//           />
//         ))
//       ) : (
//         <h1>Динозавров пока нет :(   </h1>
//       )}
//     </div>
//   );
// }

// export const memorizedDinoList = React.memo(DinoList);






// import React, { useState } from "react";
// import { DinoCard } from "@/entities/dino";
// import { useDinoList } from "../useDinoList";

// import styles from "./DinoList.module.css";
// import { IDino } from "@/entities/dino/model";
// import { DinoDetails } from "@/widgets/DinoDetails";

// export function DinoList(): JSX.Element {
//   const { dinos } = useDinoList();
//   const [selectedDino, setSelectedDino] = useState<IDino | null>(null);

//   const handleDinoSelect = (dino: IDino) => {
//     setSelectedDino(dino);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.list}>
//         {dinos.length > 0 ? (
//           dinos.map((el) => (
//             <DinoCard
//               dino={el}
//               key={el.id}
//               onClick={() => handleDinoSelect(el)} // Передаем выбранного динозавра
//             />
//           ))
//         ) : (
//           <h1>Динозавров пока нет :(</h1>
//         )}
//       </div>
//       <DinoDetails dino={selectedDino} onSelect={() => alert(`Выбран ${selectedDino?.name}`)} />
//     </div>
//   );
// }

// export const memorizedDinoList = React.memo(DinoList);




import React, { useState } from "react";
import { DinoCard, IDino } from "@/entities/dino";
import { useDinoList } from "../useDinoList";
import styles from "./DinoList.module.css";
import { DinoDetails } from "@/widgets/DinoDetails";

export function DinoList(): JSX.Element {
  const { dinos } = useDinoList();
  const [selectedDino, setSelectedDino] = useState<IDino | null>(null);

  const handleDinoSelect = (dino: IDino) => {
    setSelectedDino(dino);
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {dinos.length > 0 ? (
          dinos.map((el) => (
            <DinoCard
              dino={el}
              key={el.id}
              onClick={() => handleDinoSelect(el)}
            />
          ))
        ) : (
          <h1>Динозавров пока нет :(</h1>
        )}
      </div>
      <DinoDetails dino={selectedDino} onSelect={() => alert(`Выбран ${selectedDino?.name}`)} />
    </div>
  );
}