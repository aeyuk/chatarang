import React from 'react'

const RoomList = (props) => {
    return (
        <nav className="RoomList">
        <h2 style={styles.h2}>Rooms</h2>
        <ul style={styles.ul}>
            <li style={styles.li}><a style={styles.lia} href="#">#general</a></li>
            <li style={styles.li}><a style={styles.lia} href="#">#random</a></li>
        </ul>
      </nav>
    )
}

export default RoomList

const styles = {
    h2: {
        fontSize: '1rem',
    },
  
    ul: {
        listStyle: 'none',
        marginLeft: '0',
        paddingLeft: '0',
    },
  
    li: {
        marginBottom: '0.5rem',
    },
  
    lia: {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
    },
}