// import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
// import { DinoList } from "@/widgets/DinoList/ui/DinoList";

// export function DinoPage(): JSX.Element {
//   return (
//     <div>
//       <ErrorBoundary>
//         <DinoList />
//       </ErrorBoundary>
//     </div>
//   );
// }


// import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
// import { DinoList } from "@/widgets/DinoList/ui/DinoList";
// import { DinoDetails } from "@/widgets/DinoDetails";
// import styles from "./DinoPage.module.css"; 


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

import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import { DinoList } from "@/widgets/DinoList/ui/DinoList";
import styles from "./DinoPage.module.css";

export function DinoPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <DinoList />
      </ErrorBoundary>
    </div>
  );
}