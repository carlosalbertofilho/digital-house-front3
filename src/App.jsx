import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GamesDHPage } from "./pages/GamesDH";
import { Home } from "./pages/Home";
import { MainLayout } from "./components/mainLayout";
import { Aula02 } from "./aulas/aula02";
import { Aula04 } from "./aulas/aula04";
import { Aula07 } from "./aulas/aula07";
import { Aula13 } from "./aulas/aula13";
import { Aula14 } from "./aulas/aula14";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/aula/02",
          element: <Aula02 />,
        },
        {
          path: "/aula/04",
          element: <Aula04 />,
        },
        {
          path: "/aula/13",
          element: <Aula13 />,
        },
        {
          path: "/aula/14",
          element: <Aula14 />,
        },
      ],
    },
    {
      path: "/GamesDH",
      element: <GamesDHPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
