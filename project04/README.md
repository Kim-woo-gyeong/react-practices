## key props error
> react 에서 key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용.

## input
> onChange 이벤트가 발생하면, e.target.value 값을 통하여 객체에 담겨있는 현재의
텍스트 값을 읽어올 수 있다.

> onKeyPress 이벤트 : enter로 click과 같은 효과 발생

> onClick 이벤트
```jsx
const onChange = e => {
    setInputText(e.target.value)
};


const onClick = () => {
    // push : 기존 배열 자체를 변경
    //concat : 새로운 배열 생성 ==> 불변성 유지
    const nextNames = names.concat({
        id: nextId,
        text: inputText
    });

    setNextId(nextId+1);
    setNames(nextNames);
    setInputText('');
}

const handelKeyPress = (e) => {
    if(e.key === 'Enter'){
        onClick();
    }
}

<input 
    value={inputText} 
    onChange={onChange}
    onKeyPress={handelKeyPress}></input>

<button onClick={onClick}>추가</button>
```

> tag 안에 함수 쓰기.
```jsx
<li key={name.id} 
    onDoubleClick={() => {
        onRemove(name.id)}}
>{name.text}</li>
```

## useState vs useReducer
```jsx
const[name, setName] = useState('');
const[nickname,setNickname] = useState('');

const onChangeName = e => {
    setName(e.target.value);
}

const onChangeNickname = e => {
    setNickname(e.target.value);
}

 <input value={name} onChange= {onChangeName} /> <br />
<input value={nickname} onChange = {onChangeNickname} />
 ```
***
```jsx
//useReducer를 활용하면 여러 input 값도 한번에 관리 할 수 있음.
function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    };
}

 const[state, dispatch] = useReducer(reducer, {
    name:'',
    nickname:''
});

const {name, nickname} = state;

const onChange = e => {
    dispatch(e.target);
};

<input name='name' value={name} onChange= {onChange} /> <br />
<input name='nickname' value={nickname} onChange = {onChange} />
```

 ## useEffect
 리액트 컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 설정.
> 특정 값이 변경될 때만 호출 하고 싶은 경우
```jsx
//클래스형 컴포넌트 인 경우
componentDidUpdate(preProps, preState){
    if(prevProps.value !== this.props.value){
        doSonething();
    }
}

//useEffect 사용
useEffect(() => {
    console.log(name)
}, [name])

//언마운트 되기 전 업데이트 직전
useEffect(() => {
    console.log('effect');
    console.log(name);
    return() => {
        console.log('cleanup');
        console.log(name);
    }
}, [name]);
```

## 펼치기 & 숨기기
```jsx
const[visible, setVisible] = useState(false);
return (
    <div>
        <button
            onClick={() =>{
                setVisible(!visible);
            }}>
            {visible ? '숨기기' : '보이기'}
        </button>
        <hr/>
            {visible && <Info />}
    </div>
);
```

## useMemo , useCallback
: 렌더링 성능을 최적화 할때
일반 값 재사용 하려면 useMemo, 함수를 재사용하려면 useCallback