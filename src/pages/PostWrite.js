import { Button, Form } from "react-bootstrap";

function PostWrite() {
    return (
        <>
            <div className="home-container">
                <div className="container-main">
                    <div className="wrapper">
                        {/* <Form>
                            <Form.Group className="title">
                                <Form.Control placeholder="제목을 입력하세요." />
                            </Form.Group>
                            <Form.Group className="contents">
                                <Form.Control placeholder="내용을 입력하세요." />
                            </Form.Group>
                    </Form> */}
                        <textarea className="title" placeholder="제목을 입력하세요" style="height: 66px"></textarea>
                    </div>
                    <div className="bottom">
                        <Button>업로드하기</Button>
                    </div>
                </div>
                
                    
            </div>
        </>
    )
}

export default PostWrite;

