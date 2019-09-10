import React from 'react';

import Scene from './components/Scene';

import Tabs from './components/Tool';

import './index.scss';

export default function Main() {
  return (
    <main>
      <Scene />
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">hello world</div>
      </Tabs>
    </main>
  );
}
