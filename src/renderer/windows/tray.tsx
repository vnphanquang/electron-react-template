import React from 'react';
import ReactDOM from 'react-dom';
import '@renderer/styles/global.css';

const Tray = () => {
  return (
    <div className="app-tray">
      <p>Tray Menu goes herer</p>
    </div>
  )
}

ReactDOM.render(<Tray />, document.getElementById('tray'));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
