const QuizList = [
    {
        id: 1, 
        question : "HTML의 의미를 보기에서 고르세요!",
        answer : "Hyper Text Markup Language",
        view: {
            number1 :"Hyperlinks and Text Marup Language",
            number2 : "Home Tool Markup Language",
            number3 : "Hyper Text Markup Language",
            number4 : "Hyperlinks Tool Markup Language"
        },
        hint:"하이퍼텍스트 마크업 언어입니다.",
        type: "html",
    },
    {
        id: 2, 
        question : "다음 중 레이아웃을 위해 HTML5에 추가된 요소가 아닌 것은?",
        answer : "ul",
        view: {
            number1 :"ul",
            number2 : "header",
            number3 : "nav",
            number4 : "section"
   },
        hint:"순서없는 목록을 나타내기 위한 요소이며, header, nav, section, article, hgroup, aside, footer는 HTML5에서 레이아웃을 위해 새롭게 추가된 요소이다.",
        type: "html",
    },
    {
        id: 3, 
        question : "HTML5에서 변경된 문법은?",
        answer : "DOCTYPE 선언",
        view: {
            number1 :"대소문자 입력",
            number2 : "DOCTYPE 선언",
            number3 : "태그의 종료",
            number4 : " < head >< /head >에 포함되는 내용"
    },
    type: "html",
    },
    
    {
        id: 4, 
        question : "다음 조건의 글자를 삽입하고자 할 때 사용되지 않는 속성은? - 40pt - 궁서체 - 테두리만 있는 글자 - 가로 방향의 정렬 지정",
        answer : "3 : textBaseline",
        view: {
        number1 :"font",
          number2 : "textAlign",
          number3 : "textBaseline",
          number4 : "strokeText"
        },
        type: "css",
        },
        {
            id: 5, 
            question : "before / after의 설명으로 옳지 않은것은?",
            answer : "4 : 해당 요소의 위치 선정을 위해 해당 요소에 position: relative를 주고 position: absolute 속성을 사용한다.",
            view: {
            number1 :"before / after은 실제로 존재하지 않는 요소이다.",
            number2 : "before / after사용시 content: 큰따옴표 속성이 반드시 있어야 하며, 없다면 동작하지 않는다",
            number3 : "기본 display는 inline 으로 동작",
            number4 : "해당 요소의 위치 선정을 위해 해당 요소에 position: absolute 속성을 사용 가상요소에 relative를 적용해서 사용하는 경우가 많다"
        },
        type: "css",
        },
        {
            id: 6, 
            question : "선택자의 설명으로 옳지 않은 것은?",
            answer : "4 : ~ 그룹선택자",
            view: {
            number1 :"nth-child(n) - 자식 요소 기준으로 순서대로 내려온다.",
            number2 : "> 자식 선택자이다.",
            number3 : " + 형제 선택자",
            number4 : "~ 그룹선택자"
        },
        type: "css",
        },
        {
            id: 7, 
            question : "자바스크립트의 특징으로 틀린 것은?",
            answer : "3 : 대소문자를 구별하지 않는다.",
            view: {
            number1 :"객체 지향 프로그램 언어로 내장 객체를 사용한다.",
            number2 : "HTML 내에 삽입되어 홈페이지에 다양한 효과를 줄수 있다.",
            number3 : "대소문자를 구별하지 않는다.",
            number4 : "alert()는 자바스크립트 내장 함수이다."
        },
        type: "js",
        },
        {
            id: 8, 
            question : "data json의 설명으로 옳지 않은것은?",
            answer : "3 : 작명이 불가능하다",
            view: {
            number1 :"[]배열안에 {}객체가 들어간 구조이다. ",
            number2 : "json 시작은 {}중괄호로 시작한다.",
            number3 : "작명이 불가능하다",
            number4 : "키값에는 큰따옴표를 넣어준다."
        },
        type: "js",
        },
     


]

export default QuizList;
