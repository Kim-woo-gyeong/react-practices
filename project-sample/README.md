# react-practices

```jsx
class App = function(){   
    종속되어 있는 객체로 인식   
}
```
***
```jsx
class App = () => {   
    종속 되어 있는 인스턴스로 인식   
}
```
## Props
: properties를 줄인 표현. 컴포넌트 속성을 설정할 때 사용하는 요소.   
  props값은 부모 컴포넌트에서 설정(해당 컴포넌트를 불러와 사용하는)

### 비구조화 할당
```jsx
const {name, childeren} = this.props;
```

### state
```jsx
class {
    constructor(props) {
        super(props); // 생성자 함수 호출.
        this.state = { // 초기값 설정.
            number: 0
        };
    }
}

state = {
        number : 0,
        fixedNumber: 0
    }
```
컴포넌트에 state를 설정할 때는 constructor 메서드를 작성하여 실행.   
state는 객체형식.   

```jsx
this.setState((prevState, props) => {
    return {
        //업데이트 하고 싶은 내용
    }
})
```
> prevState : 기존 상태, props: 현재 지니고 있는 props

### useState
```jsx
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
```
배열이나 객체 업뎃을 할 때에는 사본을 만들고 사본에 값을 업데이트 후 복사해야함.   