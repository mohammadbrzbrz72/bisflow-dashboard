import Router from "./routes";
import ReduxProvider from "./store/provider";

function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}

export default App;
