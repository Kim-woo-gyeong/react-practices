import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const[color, setColor] = useState('blue');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{ color:' pink '}} onClick={() => setColor('pink')}>분</button>
            <button style={{ color:' green'}} onClick={() => setColor('green')}>초</button>
            <button style={{ color:' yellow'}} onClick={() => setColor('yellow')}>노</button>
        </div>
    )
};

export default Say;