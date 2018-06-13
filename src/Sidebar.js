import React from 'react'

import RoomList from './RoomList'
import UserInfo from './UserInfo'

const Sidebar = (props) => {
  return (
    <aside className="Sidebar" style={styles.sidebar}>
      <UserInfo user={props.user} />
      <h1
        style={{
          ...styles.children,
          ...styles.h1,
        }}
      >
        XTBC 18
      </h1>

      <RoomList/>

    </aside>
  )
}

const styles = {
  sidebar: {
    backgroundColor: '#333344',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  children: {
    padding: '0 1rem',
  },

  h2: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: '0',
  },

  avatar: {
    background: 'url(https://api.adorable.io/avatars/32/davey@getfretless.com)',
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
    marginRight: '0.5rem'
  },

  userInfo: {
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
  },

  user: {
      flex: '1',
  }
}

export default Sidebar