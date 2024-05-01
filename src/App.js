import logo from './logo.svg';
import './App.css';
import SimpleBarChart from './Chart';

function App() {

  const data = [
    { name: 'Croissants', floor: 2, butter: 3, sugar:  1, egg: 1 },
    { name: 'Pancakes', floor: 1, butter: 2, sugar: 1, egg: 2 },
    { name: 'Cookies', floor: 3, butter: 2, sugar: 2, egg: 1 },
    { name: 'Doughnuts', floor: 2, butter: 3, sugar: 2, egg: 1 }
  ];

  return (
    <div className="App">
      <h1>Check</h1>
      <SimpleBarChart data={data} />
    </div>
  );
}

export default App;
