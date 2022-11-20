import React from "react";

function Explore() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <h1>EXPLOREEEE</h1>
      <header className="App-header">
        <h1>BeSuccessful</h1>

        <p>{!data ? "Loading..." : data}</p>
      </header>
    </>
  );
}

export default Explore;
