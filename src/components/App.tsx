import c from "./App.module.scss";

function App() {
  let test: string = "TypeScript + React";
  return (
    <>
      <h1 className={c.style}>{test}</h1>
    </>
  );
}

export default App;
