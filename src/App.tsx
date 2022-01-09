import { BrowserRouter } from "react-router-dom";

import Router from "./Router";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <p>Daily QOL</p>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
