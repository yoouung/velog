import { Image } from "react-bootstrap";
import { editProfile } from "../pages/Home";


function Header() {
  return (
    <>
      <div className="header">
        {/* <img className="page-logo" src="image/emoji.png"></img> */}
        <Image className="page-logo" src="image/logo.png" onClick={() => window.location = '/'} ></Image>

        {/* 마우스 다가가면 글씨 진하게 */}
        <div className="button-group">
          {/* 페이지 변경 없이 프로필 글 수정 가능할 수 있도록 하는 기능 추가 필요 */}
          <button onClick={()=>editProfile()}> <text>edit</text> </button> 
          <button onClick={() => { window.location.href = '/postwrite' }}> <text>add post</text> </button>
          <button onClick={() => { window.location.href = '/search' }}> <text>search</text> </button>
          <button onClick={() => { window.location.href = '/settings' }}> <text>settings</text> </button>
        </div>
      </div>
    </>
  );
}

export default Header;


