import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

function Enter() {
  return (
    <div>
      <Nav className="justify-content-center enter" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/discover">enter</Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
    </div>
  );
}
export default Enter;
