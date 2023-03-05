import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./component/Home";

function App() {

  const route = useRoutes([
    {path: '/', element: <Home /> }
  ])
  return (
    <div>
      {route}
    </div>
  );
}

export default App;
