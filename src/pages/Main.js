// /* eslint-disable */

import { useState } from "react";
import MainHeader from "../templates/mainHeader";

function Main() {
  let [profile, setProfile] = useState("여기에 프로필이 들어가며, 직접 수정할 수 있습니다.");
  
  // const StyledButton = styled.button``;

  return (
    // 화면
    <>
      <Header></Header>

      <div>
        <div className="main-container">
          <div className="user-info">
            <img className="profile-image" src="image/emoji.png"></img>
            <h3 className="name">박재영</h3>
          </div>
          <hr></hr>
          <div className="profile-contents">{profile}</div>
        </div>
      </div>
    </>
  );
}

export default Main;

function Header() {
    return (
      <>
        <div className="header">
          <img className="page-logo" src="image/emoji.png"></img>
          <h3 className="yolog">yolog</h3>

          {/* <Button href="#">Link</Button>
        <Button type="submit">Button</Button>{" "}
        <Button as="input" type="button" value="Input" />{" "}
        <Button as="input" type="submit" value="Submit" />{" "}
        <Button as="input" type="reset" value="Reset" /> */}
          <div className="button-group">
            <button><img src="image/modify.png"></img></button>
            <button><img src="image/add.png"></img></button>
            <button><img src="image/search.png"></img></button>
            <button><img src="image/setting.png"></img></button>
          </div>
        </div>
      </>
  );
}