import FuncComponent from './components/FuncComponent';
import './App.css';

function App() {
  var personArr = [
    { "firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black" },
    { "firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown" },
    { "firstName": "Millard", "lastName": "Fillmore", "age": 50, "hairColor": "Brown" },
    { "firstName": "Maria", "lastName": "Smith", "age": 62, "hairColor": "Brown" }
  ]

  return (
    <div className="App">
      { 
        // iterate list of objects, and pass all value into function directly
        personArr.map(person => <FuncComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>)
      }
    </div>
  );
}

export default App;
