import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contact, work, activity, certificate, education, language, skill, award } from "./MarkdownText";


function ProfileText() {

    let [Contact, updateContact] = useState(contact);
    let [Work, updateWork] = useState(work);
    let [Activity, updateActivity] = useState(activity);
    let [Certificate, updateCertificate] = useState(certificate);
    let [Education, updateEducation] = useState(education);
    let [Language, updateLanguage] = useState(language);
    let [Skill, updateSkill] = useState(skill);
    let [Award, updateAward] = useState(award);


    // const onChange = (e) => {
    //     updateProfile(e.target.value)
    // }
    
    return (
        <>
            <div className="wrapper">
                <Container>
                    <Row>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Contact}</ReactMarkdown></Col>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Education}</ReactMarkdown></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Work}</ReactMarkdown></Col>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Language}</ReactMarkdown></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Activity}</ReactMarkdown></Col>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Skill}</ReactMarkdown></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Certificate}</ReactMarkdown></Col>
                        <Col><ReactMarkdown remarkPlugins={[remarkGfm]}>{Award}</ReactMarkdown></Col>
                    </Row>
                </Container>                
            </div>
            
        </>
    )

}

export default ProfileText;