import React from 'react';
import Feed from '../Feed';
import Panel from '../Panel';

// import styles from './App.module.css';

const panels = [
  {
    title: 'One',
    content: 'Content',
  },
  {
    title: 'Two',
    content: 'Content',
  },
  {
    title: 'Three',
    content: 'Content',
  },
  {
    title: 'Four',
    content: 'Content',
  },
  {
    title: 'Five',
    content: 'Content',
  },
  {
    title: 'Six',
    content: 'Content',
  },
  {
    title: 'Seven',
    content: 'Content',
  },
  {
    title: 'Eight',
    content: 'Content',
  },
  {
    title: 'Nine',
    content: 'Content',
  },
  {
    title: 'Ten',
    content: 'Content',
  },
  {
    title: 'Eleven',
    content: 'Content',
  },
  {
    title: 'Twelve',
    content: 'Content',
  },
];

const App = () => {
  return (
    <Feed type='dashboard'>
      {panels.map((panel) => (
        <Panel content={panel.content} key={panel.title} title={panel.title} />
      ))}
    </Feed>
  );
};

export default App;
