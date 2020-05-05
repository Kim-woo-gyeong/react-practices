import React, {useReducer, useEffect} from 'react';
import useInputs from './useInputs';

const Info = () => {
    const[state, onChange] = useInputs({
        name:'',
        nickname:''
    })

    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name='name' value={name} onChange= {onChange} /> <br />
                <input name='nickname' value={nickname} onChange = {onChange} />
            </div>
            <div>
                <b>이름 : </b>{name}
            </div>
            <div>
                <b>닉네임 : </b>{nickname}
            </div>
        </div>
    )
}

export default Info;