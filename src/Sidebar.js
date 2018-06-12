import React from 'react'

const Sidebar = (props) => {
  return (
    <aside
      className="Sidebar"
      style={styles.sidebar}
    >
      <div
        className="UserInfo"
        style={styles.children}
      >
        <div className="Avatar"></div>
        <div className="user">
          {props.user.userName}
        </div>
        <a href="#">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
      <h1
        style={{
          ...styles.children,
          ...styles.h1,
        }}
      >
        XTBC 18
      </h1>
      <nav
        className="RoomList"
        style={styles.children}
      >
        <h2 style={styles.roomList_h2}>Rooms</h2>
        <ul style={styles.roomList_ul}>
            <li style={styles.roomList_li}><a href="#">general</a></li>
            <li style={styles.roomList_li_a}><a href="#">random</a></li>
        </ul>
      </nav>
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

  roomList_h2: {
      fontSize: '1rem',
  },

  roomList_ul: {
      listStyle: 'none',
      marginLeft: '0',
      paddingLeft: '0',
  },

  roomList_li: {
      marginBottom: '0.5rem',
  },

  roomList_li_a: {
      display: 'block',
      color: 'whitesmoke',
      textDecoration: 'none',
  },
}

export default Sidebar