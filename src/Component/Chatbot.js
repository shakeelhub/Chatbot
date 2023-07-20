import React, { useState } from 'react'
import Messages from './Messages'
import { analyze } from './Utilise';

function Chatbot() {

    const [messages, setMessage] = useState([
        {
            message: 'Hi, May I Know Your Name'
        }
    ])

    const [text, setText] = useState('');

    const onSend = () => {
        let list = [...messages, { message: text, user: true }]

        if (list.length > 2) {
            const reply = analyze(text)
            list = [
                ...list,
                { message: reply }
            ]
        } else {
            list = [
                ...list,
                {
                    message: `Hi,${text}`
                },
                {
                    message: 'How can i help you?'
                },
            ];
        }
        setMessage(list);
        setText('');
        setTimeout(() => {
            document.querySelector('#copyright').scrollIntoView();
        }, 1);

    };


    return (
        <div className='back'>
            <div className='d-flex align-items-center justify-content-center app' >
                
                <h2 className='text-primary text'>Chatbot</h2>
            </div>
            <div className='chat-message'>
                {
                    messages.length > 0 && messages.map((data) => <Messages{...data} />)
                }
                <div className='d-flex mt-2'>
                    <input type='search' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
                    <button type='primary' className='primary ms-3' onClick={onSend}>Send</button>
                </div>
                <div id='copyright' className='mt-3'>Copyright Reserved - MD SHAKKEL</div>
            </div>
        </div>
    )
}

export default Chatbot