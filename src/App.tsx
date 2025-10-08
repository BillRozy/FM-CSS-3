import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Main></Main>
      <Header />
    </div>
  );
}

export default App;
