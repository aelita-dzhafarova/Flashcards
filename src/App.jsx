import Header from './components/Header';
import Home from './components/Home';
import Card from './components/Card';
import List from './components/List';
import './style/App.css';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Home></Home>
      <Card></Card>
      <List></List>
    </div>
  );
}

export default App;
