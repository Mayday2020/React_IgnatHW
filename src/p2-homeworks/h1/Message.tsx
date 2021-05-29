import React from 'react'
import s from './Message.module.css'
type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            <img className={s.ava} src={props.avatar} alt=""/>
            <div className={s.item}>
                <div className={s.userMessage}>{props.name}</div>
                <div className={s.textMessage}>{props.message}
                    <span className={s.timeMessage}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
