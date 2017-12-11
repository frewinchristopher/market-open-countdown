require('normalize.css/normalize.css');
require('styles/App.css');

// imports
import React from 'react';
import Countdown from 'react-count-down';
import moment from 'moment-timezone';
import ConfettiDimensioned from './ConfettiWrapper.js';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      bShowConfetti: false
    };
    this.showConfetti = this.showConfetti.bind(this);
    this.toTimeZone = this.toTimeZone.bind(this);
  }
  showConfetti() {
    this.setState({bShowConfetti: true});
  }
  toTimeZone(time, tz) {
    var format = 'YYYY.MM.DD HH:mm:ss';
    return moment(time, format).tz(tz).format(format);
  }
  render() {
    var oWallStreetTime = moment().tz("EST");
    oWallStreetTime = oWallStreetTime.hour(9);
    oWallStreetTime = oWallStreetTime.minute(30);
    oWallStreetTime = oWallStreetTime.second(0);
    var tz = moment.tz.guess(); // user's time zone
    var oLocalTime = this.toTimeZone(oWallStreetTime, tz); // convert the 9:30:00 local time EST to the user's timezone
    const cb = () => {
      this.showConfetti();
    }
    const OPTIONS = { className: 'react-count-down', endDate: oLocalTime, prefix: 'until the u.s. markets open!', cb }
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
