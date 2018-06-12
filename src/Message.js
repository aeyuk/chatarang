import React from 'react'

const Message = (props) => {
    return (
        <div 
            className="Message"
            style={styles.message}
        >
            <div 
                className="user"
                style={styles.user}
            >{props.message.userName}
            </div>
            <div 
                className="time"
                style={styles.time}
            >1:10 PM
            </div>
            <div 
                className="body"
                style={styles.body}
            >{props.message.body}
            </div>
        </div>
    )
}

const styles = {
    message: {
        display: 'flex',
        alignItems: 'baseline',
        marginTop: '1rem',
        padding: '0 1rem',
    },
    user: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
    },
    time: {
        color: '#999',
        fontSize: '0.8rem',
    },
    body: {
        flex: '1',
        paddingLeft: '0.5rem',
        
    }
}

export default Message