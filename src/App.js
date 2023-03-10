import classes from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
function App() {
  return (
    <div className={classes["App"]}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
