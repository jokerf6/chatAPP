import React from "react";
import { Link } from "react-router-dom";
//import styled from "styled-components";
export default function BUTTONLOGIN() {
  return (
    <div className="bm">
      <button type="submit">Create User</button>
      <span>
        Donot have an account ? <Link to="/register">Register.</Link>
      </span>
    </div>
  );
}
