import "./App.css";

function App() {
  const handleGet = (e) => {
    e.preventDefault();
    console.log("GET!!!");
  };

  const handlePost = (e) => {
    e.preventDefault();
    console.log("POST!");
  };
  return (
    <>
      <button onClick={handleGet}>Get Test</button>
      <button onClick={handlePost}>POST Test</button>
    </>
  );
}

export default App;
