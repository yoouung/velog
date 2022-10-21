import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  let [profilecontent, setProfile] = useState("여기에 프로필이 보여지며, 마크다운 형식으로 직접 수정 가능");

  return (
    // 화면
    <>
      <div>
        <div className="home-container">
          <div className="container-main">
            <div className="user-info-box">
              {/* 정방향이 아닌 직사각형 이미지는 어떻게 동그랗게 자를지? */}
              {/* <img className="profile-image" src="image/profile"></img> */}
              <Image className="profile-image" src="image/profile.png" roundedCircle></Image>
              <h3 className="user-name">박재영</h3>
            </div>
            <hr></hr>
            <div><div className="page-box"><PostPageList /></div></div>
            <div className="contents-box">{profilecontent}</div>
            
          </div>
        </div>
      </div>

      
    </>
  );
}

function PostPageList() {
  let [pageName, setPageName] = useState(['profile', 'postlist', 'postlist2', 'postlist3'])

  return (
    <>
      <div className="page-block">
        <ul>
          {
            pageName.map(function (a, i) {
              return (
                <div className="list">
                  <Link to={"/"+ pageName[i]} style={{ textDecoration: 'none', color: 'black' }}>
                    {pageName[i]}
                  </Link>
                </div>
              )
            })
          }
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