import * as React from 'react';
import Notification from './components/Notification';

class App extends React.Component {
  public render() {
    return <Notification />;
  }

  componentDidCatch(error: any, info: any) {
    console.error("Notification Micro-app: " + info, error)
  }
}

export default App;
