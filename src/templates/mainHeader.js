import { Button } from "react-bootstrap";

const MainHeader = () => {

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
          <button> <img src="image/modify.png"></img> </button>
          <button> <img src="image/add.png"></img> </button>
          <button> <img src="image/search.png"></img> </button>
          <button> <img src="image/setting.png"></img> </button>
        </div>
      </div>
    </>
  );
}

export default MainHeader;