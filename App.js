import React from 'react';
import { AppLoading } from 'expo';
import { Container} from 'native-base';
import Navigator from './toolbar/toolbar';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Navigator/>
      </Container>
    );
  }
}