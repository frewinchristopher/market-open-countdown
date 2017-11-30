import PropTypes from 'prop-types'
import React from 'react'
import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'

const ConfettiDimensioned = sizeMe({
  monitorHeight: true,
  monitorWidth: true
})(class Example extends React.PureComponent {
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  }
  render() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Confetti {...this.props.size} run={this.props.showConfetti} colors={['#1b8851','#42aa1f','#7ac800','#9dcf00','#e2c800']}/>
      </div>
    )
  }
});

export default ConfettiDimensioned;