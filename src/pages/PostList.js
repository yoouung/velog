import React from "react";
import { useState } from "react";

function PostList() {
  let [title, setTitle] = useState(["글제목1", "글제목2", "글제목3"]);
  let [contents, setContents] = useState(["글내용1", "글내용2", "글내용3"]);
  
  return (
    <>
      <div className="home-container">
          <div className="container-main">
      
          {
            title.map(function (a, i) {
              return (
              <div className="content">
                  <h3 className="titleText">{title[i]}</h3>
                  <text className="contentText">{contents[i]}</text>
              </div>
              )
            })
          }
        </div>
      </div>
            
    </>
  );
}
export default PostList;
