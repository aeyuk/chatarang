import React from 'react'

const Metadata = ({ message }) => {
  function getTime() {
    let currentTime = message.id
    currentTime = new Date(message.id)
    currentTime = currentTime.getHours() + ':' + currentTime.getMinutes()
    return currentTime
  }
  return (
    <div className="Metadata" style={styles.data}>
      <div className="user" style={styles.user}>
        {message.user.displayName}
      </div>
      <div className="time" style={styles.time}>
        {getTime()}
      </div>
    </div>
  )
}

const styles = {
  data: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  }
}

export default Metadata