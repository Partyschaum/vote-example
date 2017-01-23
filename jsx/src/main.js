import React from 'react';
import ReactDOM from 'react-dom';

const md5 = require('md5');

import { myFunc } from './lib';
// import { test } from './test.jsx';


function Title(props) {
  return <h1>{props.label}{myFunc()}</h1>;
}
function Header() {
  return <div className='header'><Title label='Hello, World' /></div>;
}

function Question(props) {
  return <div>
    <label htmlFor="question">{/* commment */ props.question}</label><br/>
    <input type="text" name="question"></input>
  </div>
}

function List(props) {
  const fontColor = 'green';
  const fontSize = '20';
  const listStyle = {
    color: fontColor,
    fontSize: fontSize + 'px',
  };

  const items = props.items.split(' ').map(e => {
    return <li key={md5(e)}>{e}</li>
  });

  return <ul style={listStyle}>{items}</ul>
}

function Danger() {
  const potentialRisk = '<b>This is raw HTML</b>';
  const html = { __html: potentialRisk };

  return <ul>
    <li>Danger: {potentialRisk}</li>
    <li>Dangerously: <span dangerouslySetInnerHTML={html} /></li>
  </ul>
}

function Page() {
  return <div>
    <Header />
    <Danger />
    <Question question="hase"/>
    <List items="hase igel fuchs"/>
  </div>
}

ReactDOM.render(<Page />, document.getElementById('mountPoint'));
