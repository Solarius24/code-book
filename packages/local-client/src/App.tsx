import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CellList from "./components/cell-list";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CellList />
    </div>
  );
};
export default App;
