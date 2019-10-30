import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

function domElementGetter() {
  let el = document.getElementById('notifications');
  if (!el) {
    el = document.createElement('div');
    el.id = 'notifications';
    document.body.appendChild(el);
  }

  return el;
}
