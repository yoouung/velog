import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  let [profilecontent, setProfile] = useState("여기에 프로필이 보여지며, 마크다운 형식으로 직접 수정 가능");

  return (
    // 화면
    <>
      <div>
        <div className="main-container">
          <div className="user-info">
            {/* 정방향이 아닌 직사각형 이미지는 어떻게 동그랗게 자를지? */}
            {/* <img className="profile-image" src="image/profile"></img> */}
            <Image className="profile-image" src="image/profile.png" roundedCircle></Image>
            <h3 className="name">박재영</h3>
          </div>
          <hr></hr>
          <div className="profile-contents">{profilecontent}</div>
        </div>
      </div>

      <PostPageList />
    </>
  );
}

function PostPageList() {
  let [pageName, setPageName] = useState(['profile', '페이지1', '페이지2', '페이지3'])

  return (
    <>
      <div className="page-block">
        <ul>
          <div><Link to="/">{pageName[0]}</Link></div>
          <div><Link to="/postlist">{pageName[1]}</Link></div>
        </ul>
      </div>
      
    </>
  );
  // pageName.map(function(a){
  //   return (
  //   <div className="list">
  //     <text>{ a }</text>
  //   </div> )
  // }) 
}

export default Home;