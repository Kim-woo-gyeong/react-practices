# react-practices

```
class App = function(){   
    종속되어 있는 객체로 인식   
}
```
***
```
class App = () => {   
    종속 되어 있는 인스턴스로 인식   
}
```
## Props
: properties를 줄인 표현. 컴포넌트 속성을 설정할 때 사용하는 요소.   
  props값은 부모 컴포넌트에서 설정(해당 컴포넌트를 불러와 사용하는)

### 비구조화 할당
```
const {name, childeren} = this.props;
```

### state
```
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

```
this.setState((prevState, props) => {
    return {
        //업데이트 하고 싶은 내용
    }
})
```
> prevState : 기존 상태, props: 현재 지니고 있는 props