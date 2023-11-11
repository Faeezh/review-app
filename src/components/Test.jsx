import PropTypes from 'prop-types'

function Test({ myTest , bgColor }) {
    const testStyles = {
        backgroundColor: bgColor,
    }
    
  return (
    <div style={testStyles}>
      <h1 style={{ color: 'yellow' }}>{myTest}</h1>
    </div>
  )
}

Test.defaultProps = {
    myTest: 'FeedBack UI',
    bgColor: 'rgba(0,0,0,0.4)',
}

Test.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Test
