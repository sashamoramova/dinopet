import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import PixiApp from "@/widgets/PixiApp/ui/PixiApp";
// import PixiApp from "@/widgets/PixiApp/ui/PixiApp";

export function PixiPage(): JSX.Element {
  return (
    <div>
      <ErrorBoundary>
        <PixiApp />
      </ErrorBoundary>
    </div>
  );
}

