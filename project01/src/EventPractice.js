import React, {Component} from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message:''
    }

    //가독성이 높은 코드
    // 메소드를 this와 바인딩 하는 작업 필요
    // 화살표 함수 형태로 메서드를 정의하면 생성자에서 바인딩 할 필요 없음.

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username:'',
            message:''
        });
    }

    handelKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="사용자이름"
                    value={this.state.username}
                    onChange={ this.handleChange} />
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    value={this.state.message}
                    onChange={ this.handleChange} 
                    onKeyPress= { this.handelKeyPress }/>
                    <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;