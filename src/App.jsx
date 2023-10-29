import "./App.css";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { routerr } from "./routers";

function App() {
  const user = {
    username: "Lanang",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={routerr} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
