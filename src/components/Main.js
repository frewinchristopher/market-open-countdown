require('normalize.css/normalize.css');
require('styles/App.css');

// imports
import React from 'react';
import Countdown from 'react-count-down'
import ConfettiDimensioned from './ConfettiWrapper.js'

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      bShowConfetti: false
    };
    this.showConfetti = this.showConfetti.bind(this);
  }
  secondsUntilMarketOpen() {
      var marketOpen = new Date();
      marketOpen.setHours( 9 );
      marketOpen.setMinutes( 0 );
      marketOpen.setSeconds( 0 );
      marketOpen.setMilliseconds( 0 );
      return ( marketOpen.getTime() - new Date().getTime() ) / 1000;
  }
  showConfetti() {
    this.setState({bShowConfetti: true});
  }
  render() {
    const cb = () => {
      this.showConfetti();
    }
    const OPTIONS = { className: 'react-count-down', endDate: '11.30.2017 16:20:00', prefix: 'until the market opens!', cb }
    return (
        <div>
          <div className="flexContainer">
            <div className="container">
              { !this.state.bShowConfetti && <Countdown options={OPTIONS} />}
              { this.state.bShowConfetti && <h1 className="marketOpen">MARKET<br/>OPEN!</h1>}
              <hr className="hr"/>
            </div>
          </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ConfettiDimensioned showConfetti={this.state.bShowConfetti}/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
