import AppContainer from "./components/AppContainer";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <main className="min-h-screen bg-gray-100 md:flex md:flex-col md:items-center md:justify-center">
        <AppContainer />
      </main>
    </AppContextProvider>
  );
}

export default App;
