
function One() {
  return <p>one</p>
}

function Two() {
  return <p>two</p>
}

function Three() {
  return <p>three</p>
}

function App() {
  return (
    <div>
      {[
        <One />,
        <Two />,
        <Three />,
        [
          <One />,
          <Two />,
          [
            <One />,
            <Two />,
          ]
        ]
      ]}
    </div>
  );
}

export default App;