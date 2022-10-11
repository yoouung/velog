import React from "react";

function List() {
  let [title, setTitle] = useState(["글제목1", "글제목2", "글제목3"]);
  let [contents, setContents] = useSate(["글내용1", "글내용2", "글내용3"]);

  return (
    <>
      <div className="content">
        <h3 className="titleText">{title[0]}</h3>
        <text className="contentText">{contents[0]}</text>
      </div>
      <div className="content">
        <h3 className="titleText">{title[0]}</h3>
        <text className="contentText">{contents[0]}</text>
      </div>
      <div className="content">
        <h3 className="titleText">{title[0]}</h3>
        <text className="contentText">{contents[0]}</text>
      </div>
    </>
  );
}
export default List;
