import './App.css';
import Clock from './components/Clock';
import Select from './components/Select';

function App() {
  const handleChange = (city) => {
    //console.log(city);
  }
  
  return (
    <div className='app'>
      <Clock />
      <Select onChange={handleChange} />
    </div>
  );
}

export default App;