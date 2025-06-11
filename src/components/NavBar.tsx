import { useLocation } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function NavBar() {
    const page = useLocation().pathname

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Nav variant="underline" defaultActiveKey={page}>
                    <Nav.Item>
                        <Nav.Link href="/" eventKey="/">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#projects" eventKey="#projects">Projects</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link href="/art" eventKey="/art">Art</Nav.Link>
                    </Nav.Item> */}
                </Nav>
            </Container>
        </Navbar>
  );
}