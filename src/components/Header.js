import { useState } from "react";
import { Image } from "react-bootstrap";


function Header() {

  return (
    <>
      <div className="header">
        {/* <img className="page-logo" src="image/emoji.png"></img> */}
        <Image className="page-logo" src="image/logo.png" onClick={() => window.location = '/'} ></Image>

        {/* 마우스 다가가면 글씨 진하게 */}
        <div className="button-group">
          <button onClick={() => { window.location.href = '/postwrite' }} >
            <text>add post</text>
          </button>
          <button onClick={() => { window.location.href = '/search' }}>
            <text>search</text>
          </button>
          <button onClick={() => { window.location.href = '/settings' }}>
            <text>settings</text>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;


