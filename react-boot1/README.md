npm install react-router-bootstrap --save

### 다양한 버튼
```jsx
import Button from 'react-bootstrap/Button';

<ButtonToolbar>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
</ButtonToolbar>
```
### withRouter
다른 컴포넌트를 감싸는 컴포넌트로 Router에 정보전달이 가능하다.   
url path 정보 등 유용한 정보들을 얻을 수 있다.   
location.pathname 등으로 동적으로 처리 할 수 있다.   
```jsx
class Navigation extends Component {
    render(){
        const { location } = this.props;
        console.log(this.props);
    return (
      <Navbar bg="light" variant="light">
        <Nav activeKey={location.pathname}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/one">One</Nav.Link>
          <Nav.Link href="/two">Two</Nav.Link>
        </Nav>
      </Navbar>
    );
    }
  };

export default withRouter(Navigation);
```
