npm install react-router-bootstrap --save


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