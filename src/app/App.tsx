import { Suspense } from "react";
import { AppRouter } from "./providers"

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <AppRouter />
    </Suspense>
  );
}

export default App
