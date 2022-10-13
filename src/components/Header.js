// import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Header() {
  return (
    <>
      <div className="header">
        {/* <img className="page-logo" src="image/emoji.png"></img> */}
        <Image className="page-logo" src="image/emoji.png" roundedCircle></Image>
        <h3 className="yolog">yolog</h3>

        {/* 마우스 다가가면 글씨 진하게 */}
        <div className="button-group">
          {/* 페이지 변경 없이 프로필 글 수정 가능할 수 있도록 하는 기능 추가 필요 */}
          <button> <text>edit</text> </button> 
          <button> <text>add post</text> </button>
          <button> <text>search</text> </button>
          <button> <text>settings</text> </button>
        </div>
      </div>
    </>
  );
}

export default Header;


