import "./assets/css/App.css";
import Router from "./routes/router";
import AppState from "./context/AppState";
function App() {
  return (
    <div className="App">
      <AppState>
        <Router />
      </AppState>
    </div>
  );
}

export default App;
