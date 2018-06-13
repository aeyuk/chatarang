import React from 'react'

const Message = (props) => {
    return (
        <div 
            className="Message"
            style={styles.message}
        >
            <div 
                className="Avatar"
                style={styles.avatar}
            >
            </div>
            <div className="details" style={styles.details}>
                <div className="Metadata" style={styles.metadata}>
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
                </div>
                <div
                    className="body"
                    style={styles.body}
                >{props.message.body}
                </div>
            </div>
        </div>
    )
}

const styles = {
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
    },
    metadata: {
        display: 'flex',
        alignItems: 'baseline',
    },
    details: {
        flex: '1',
        paddingLeft: '0.5rem',
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
    },
    avatar: {
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
    },
}

export default Message