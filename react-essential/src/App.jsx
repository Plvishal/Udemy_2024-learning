import { useState } from 'react';
import DynamicsValues from './components/DynamicsValues';
import PropsComponents from './components/PropsComponents';
import TabbButton from './components/TabbButton';
import { EXAMPLES } from './data.js';
function App() {
  const [selectionTopic, setSelectionTopic] = useState();
  function handleSelect(selectButton) {
    setSelectionTopic(selectButton);
    console.log(selectButton);
  }
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

        <div>
          <menu>
            <h2>Examples</h2>
            <TabbButton onSelect={() => handleSelect('components')}>
              Components
            </TabbButton>
            <TabbButton onSelect={() => handleSelect('props')}>
              Props
            </TabbButton>
            <TabbButton onSelect={() => handleSelect('jsx')}>JSX</TabbButton>
            <TabbButton onSelect={() => handleSelect('state')}>
              State
            </TabbButton>
          </menu>
          {!selectionTopic ? (
            'Please selected one of them'
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectionTopic].title}</h3>
              <p>{EXAMPLES[selectionTopic].description}</p>
              <pre>{EXAMPLES[selectionTopic].code}</pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
