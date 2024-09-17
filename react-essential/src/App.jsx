import DynamicsValues from './components/DynamicsValues';
import PropsComponents from './components/PropsComponents';

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <DynamicsValues />

        <br />
        <PropsComponents />
      </main>
    </div>
  );
}

export default App;
