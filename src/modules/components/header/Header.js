import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log('changing state');
    }
    render () {
        return (
            <div className="header text-white">
                <Navbar bg="dark" variant="dark" expand="md" sticky="top">
                    <Navbar.Brand>
                        <Link to="/">iAudit</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem className="mr-3">
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem className="mr-3">
                                <Link to="/filestatus">File Status</Link>
                            </NavItem>
                            <NavItem className="mr-3">
                                <Link to="/notification">Notification Center</Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;
