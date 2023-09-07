import './App.css';

function App() {

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1 style={{ color: 'red' }}>년 : {year}</h1>
      <h2>월/일 : {month + 1}/{date}</h2>
      <h3>시간 : {hour}시 {min}분 {sec}초</h3>
    </div>
  );
}

export default App;
