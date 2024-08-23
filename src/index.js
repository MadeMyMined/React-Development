// Original
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myFirstElement = <h1>I Miss You Baby!</h1>
// const mySecondElement = <h1>I Love You Pau!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
// root.render(mySecondElement);

import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>I Miss You Baby!</h1>;
const mySecondElement = <h1>I Love You Pau!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {myFirstElement}
    {mySecondElement}
  </div>
);
