import React from 'react';
import ReactDOM from 'react-dom';
import Test from '@renderer/components/Test';
import '@renderer/styles/global.css';

const App = () => {
  const myNotification = new Notification('Title', {
    body: 'Notification from the Renderer process'
  })

  return (
    <React.Fragment>
      <div className="text-red-500 bg-blue-500 hover:bg-green-700">Hello React!</div>
      <Test/>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
