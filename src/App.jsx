import s from "./App.module.css";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  return (
    <div className={s.App}>
      <div className={s.logo}>
        <h1>tracker</h1>
      </div>
      <Input />
      <List />
    </div>
  );
};

export default App;
