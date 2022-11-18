import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";


const markdown1 = `

#### ☎️ **Contact Info**

**Phone** 010-3823-3528

**Email** jyp101400@naver.com

#### 👩‍💻 Work Experience

2022.07~ KT 에이블스쿨 튜터

2022.05~2022.07 인턴 [데이터트리] 정보화전략계획(ISP) 수립

#### 🗣 Language

**English**

TOIEC 880 (2021)

IELTS 6.5 (2020)

회화 능력 중

#### **🫧 Activity**

**동아리**

2022.09~ GDSC(Google Developer Student Club) Seoultech 2기

2020.03~2021.12 코알라(코딩을 알려달라)

**IT서비스LAB 학생연구원**

2022.02~ 딥페이크 기술을 이용한 얼굴 비식별화

2021.10~ 에너지데이터 가이드라인 개발 및 플랫폼 설계 기획

**Training**

2022.09 [코멘토] IT 8개 직무 기초체험 직무부트캠프 수료

2022.08 [스파르타코딩클럽] 웹개발 종합반(풀스택) 훈련과정 수료

2021.07 [창업진흥원] 서울과학기술대학교 2021 창업동아리 기본교육과정 수료

2020.07 [한국기상산업기술원] 기상기후 빅데이터 공개강좌(기본과정) 수료

#### 📝 **Used Tool & Skill**

**Tool**

Git Github AWS

**Skill**

Python Java HTML CSS Javascript React Spring

#### 🏅Award

2022 2022 한국정보기술학회 하계종합학술대회 우수논문 선정
: 에너지 AMI 데이터의 마이홈 데이터 구축 방안 분석

2021 2021 한국정보기술학회 추계종합학술대회 우수논문 선정
: 마이 데이터 기반 에너지 데이터 플랫폼 서비스 설계

2021 ITM전공 2021학년도 코딩대회 동상

2021 Global Challenger 해외부문 은상

#### 🧾 Certificate

2022 정보처리기사 취득
`;


const markdown2 = `
#### **🎓 Education**

2019~ Northumbria University, Information Technology Management for Business(ITMB)

2019~ 서울과학기술대학교 산업공학과 ITM전공

2018 신봉고등학교 졸업
`;


function ProfileText() {

    let [profilecontents, updateProfile] = useState(ProfileText);
    const onChange = (e) => {
        updateProfile(e.target.value)
    }
    
    return (
        <>
            <div className="wrapper">
                <div className="row">
                    <div className="column1">
                        <ReactMarkdown>{markdown1}</ReactMarkdown>
                    </div>
                    <div className="column2">
                        <ReactMarkdown>{markdown2}</ReactMarkdown>
                    </div>
                </div>
                
            </div>
            
        </>
    )

}

export default ProfileText;