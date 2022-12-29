import { React, useState } from "react";
import Stack from 'react-bootstrap/Stack';

function PostList() {
  let TitleList = ["글제목1", "글제목2", "글제목3"]

  let [Title, setTitle] = useState(TitleList);
  // let [Contents, setContents] = useState(["글내용1", "글내용2", "글내용3"]);
  
  return (
    <>
      <div className="home-container">
          <div className="container-main">
          {
            TitleList.map(function (a, i) {
              return (
                <Stack gap={10}>
                      <div className="post">{TitleList[i]}</div>
                </Stack>
              )
            })
          }
          
          

          
        </div>
      </div>
            
    </>
  );
}
export default PostList;
