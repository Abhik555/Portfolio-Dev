import Card from './components/card';
import Projectcard from './components/projectcard';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div>
        <Card text="Test" />
        <p></p>
        <Projectcard title="Portfolio Website" img=".././assets/web.jpg" />
      </div>
    </div>
  );
}

export default App;
