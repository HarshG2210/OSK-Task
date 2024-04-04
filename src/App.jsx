import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AboutUs from "./components/pages/AboutUs";
import Home from "./components/Home/Home";
import Main from "./components/pages/Main";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<Home />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="services" element={<Main />} />
        <Route path="about-us" element={<AboutUs />} />
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={} /> */}
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
