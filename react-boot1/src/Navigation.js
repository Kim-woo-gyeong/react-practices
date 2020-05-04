import React, {Component} from 'react';
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
    render(){
        const { location } = this.props;
        console.log(this.props);
    return (
      <Navbar className="navsbar" bg="light" variant="light">
        <Nav activeKey={location.pathname}>
          <Nav.Link className="navlink" href="/">속성</Nav.Link>
          <Nav.Link className="navlink" href="/comment">코멘트</Nav.Link>
          <Nav.Link className="navlink" href="/file">파일 & 링크</Nav.Link>
        </Nav>
      </Navbar>
        );
    }
  };

export default withRouter(Navigation);
