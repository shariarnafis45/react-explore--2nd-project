import "./App.css";
import DaisyNav from "./components/DaisyUiNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <DaisyNav></DaisyNav>
      </header>
    </>
  );
}

export default App;
