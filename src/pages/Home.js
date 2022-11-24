import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileText from "../components/ProfileText";

function Home() {

  return (
    // 화면
    <>
      <div style={{height: 'auto', minHeight: '100vh', marginBottom: '70px', paddingBottom: '50px'}}>
        <div className="home-container">
          <div className="container-main">
            <div className="user-info-box">
              {/* 정방향이 아닌 직사각형 이미지는 어떻게 동그랗게 자를지? */}
              {/* <img className="profile-image" src="image/profile"></img> */}
              <Image className="profile-image" src="image/profile.png" roundedCircle></Image>
              <h3 className="user-name">박재영</h3>
            </div>
            <hr/>
            <div>
              <div className="page-box"><PostPageList /></div>
            </div>
            <div>
              <ProfileText/>
            </div>
            
            
          </div>
        </div>
      </div>

      
    </>
  );
}

function PostPageList() {
  let [TagName, updateTagName] = useState(['profile', 'postlist', 'postlist2', 'postlist3'])

  return (
    <>
      <div className="page-block">
        <ul>
          {
            TagName.map(function (a, i) {
              return (
                <div className="list">
                  {TagName[i] == 'profile'
                    ? <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>
                      {TagName[i]}
                    </Link>
                    : <Link to={"/" + TagName[i]} style={{ textDecoration: 'none', color: 'black' }}>
                      {TagName[i]}
                    </Link>}
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

function editProfile() {
  console.log("editProfile clicked")

  // updateProfile("프로필 업데이트")
}

export {Home as default, editProfile};