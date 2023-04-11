import React from "react";
import { Nav } from "react-bootstrap";

export default function Header(){
    return (<> 
    <div style={{
      backgroundColor:'#f2f2f2' 
    }}>
    <Nav activeKey="/" className="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/home">inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/locations">locations</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">sobre nosotros</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    </>)
}