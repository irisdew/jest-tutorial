import { Hello } from "./component/Hello";

const user = {
  name: "Mike",
  age: 20,
};

function App() {
  return (
    <div className="App">
      <Hello user={user} />
    </div>
  );
}

export default App;
