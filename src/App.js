import Expenses from './components/Expenses/Expenses';
import './App.css'

function App() {
  const expenses = [
    {title:'Car Insurance',date: new Date(),amount:'798.99'},
    {title:'House Rent',date: new Date(),amount:'399.99'},
    {title:'Laptop',date: new Date(),amount:'1298.99'},
    {title:'Toilet Paper',date: new Date(),amount:'16.99'},
]
  return (
    <div className="App">
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
