import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <div className='App'>
      <ClickCounter name='Sikis Ustasi'></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
