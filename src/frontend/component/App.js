import React from 'react';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

const App = () => (
  <div>
    <PurpleAppBar />
    <section style={{ padding: 20 }}>
      <SuccessButton label='Start Web Worker' primary raised onclick={() => {
        if (typeof(Worker) !== "undefined") {
          const webWorker = new Worker("./worker.js")
          webWorker.addEventListener("message", (event) => {
            if(event.data === "Done!") webWorker.terminate()
          })
        } else console.error("can't use WebWorkers: browser too old?");
      }}/>
    </section>
  </div>
);

export default App;
