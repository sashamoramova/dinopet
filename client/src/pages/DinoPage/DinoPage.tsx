import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import { DinoList } from "@/widgets/DinoList/ui/DinoList";

export function DinoPage(): JSX.Element {
  return (
    <div>
      <ErrorBoundary>
        <DinoList />
      </ErrorBoundary>
    </div>
  );
}


// import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
// import { DinoList } from "@/widgets/DinoList/ui/DinoList";
// import { DinoDetails } from "@/entities/dino/ui/DinoDetails"; // Предположим, что DinoDetails находится здесь
// import styles from "./DinoPage.module.css"; // Создайте стили для DinoPage

// export function DinoPage(): JSX.Element {
//   return (
//     <div className={styles.container}>
//       <ErrorBoundary>
//         <div className={styles.content}>
//           <DinoList />
//           <DinoDetails />
//         </div>
//       </ErrorBoundary>
//     </div>
//   );
// }