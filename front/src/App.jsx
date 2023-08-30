import "./App.css";
import LandingPage from "./views/Landing Page/LandingPage";
import DetailPage from "./views/Detail Page/DetailPage";
import HomePage from "./views/Home Page/HomePage";
import FormPage from "./views/Form Page/FormPage";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>

      <Route path="/">
        <LandingPage></LandingPage>
      </Route>
    </div>
  );
}

export default App;
