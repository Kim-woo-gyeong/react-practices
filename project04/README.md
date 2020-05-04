## key props error
> react 에서 key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용.

## <input>
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