import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Hero heroName='Batman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Superman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker'></Hero>
      </ErrorBoundary>
    </div>
  );
}

export default App;
