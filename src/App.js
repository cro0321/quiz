import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';
import QuizList from './components/QuizList';


function App() {
  //App.js 의 값을 라우터로 넘겨주려면 넘겨줄 페이지에 ChangeName={ChangeName} userName={userName} 이렇게 써줌
  //userName의 기본값은 useState 자체가"" 비워져있다 그래서
  const [userName,setUserName] = useState("10월2일키키킼크키크키키킼 6일이나쉰다");
  const [quizList, setquizList] = useState(QuizList);
  //[... 원본을 넣어줘야한다]
  const quiz = [...QuizList];
  // 기본값을 3으로 설정해두면 4문제가 나온다 배열이 0부터 시작하기 때문에
  const [selected, setSelected] = useState(3);

  const [quizCnt, setQuizCnt] = useState(QuizList.length);
  const [typeTxt, setTypetxt] = useState("전체");
  //ChangeEvent이라는 함수를 만들어주고 매개변수 뚫뚫하고 ChangeEvent을 
  const ChangeEvent = (data) =>{
    //data의 classNAme을 가져와준다/ data의 value를 가져와준다.
    const classValue = data.target.className;
    const dataValue = data.target.value 
    console.log(dataValue)
// swich문 defaul는 맨 마지막에만 들어간다 사용하는 방법은 case문 조건문에 원하는값 후 break
    switch(true){
      //includes("값") > 해당 문자열이 있는지 체크하는 속성.
      //classname에서  name이 있는지 체크

      //랜덤을 하려면 배열을 초기화 해야한다 왜나하면 초기화가 없다면 기존에 있던 배열 그대로가 있고 그다음부터 랜덤으로 나와주기 떄문에 
      case classValue.includes("name") :
        setUserName(dataValue)
        break;

      case classValue.includes("random"):
        //여기서 1은 랜덤이고 QuizList의 첫자리를 기준으로 오름차순해준다(sort함수)
      (dataValue ==="1" ?   
      setquizList([...QuizList].sort(()=>{
        // slice 0번부터 내가 선택한 번호숫자까지 복사해서 나와주게하기.
        return Math.random() -0.5}).slice(0,selected)
        )
      
      : setquizList([...QuizList]).slice(0,selected))
        //0~1사이의 값을 반환> 0.5의 평균값을 얻게 되어  -0.5~ 0.5값으로 랜덤출력 가운데 값이 평균이기 때문에https://butterguy.tistory.com/entry/%EC%9B%90%EC%86%8C%EB%A5%BC-%EB%AC%B4%EC%9E%91%EC%9C%84%EB%A1%9C-%EC%84%9E%EB%8A%94-%EB%B0%A9%EB%B2%95
        break;

      case classValue.includes("cnt"):
        setSelected(dataValue)
        break;

         case classValue.includes("type"):
        (dataValue === "전체"
        ?
        setquizList([...QuizList].slice(0,selected))
        :
        setquizList([...QuizList].filter((e)=>{
          // console.log(e)
          return e.type === dataValue
        }).slice(0,selected))
        )
        setTypetxt(dataValue)
    
        break;
        default:
        console.log("데이터가 없습니다.");
    }

  }

  

  console.log("실행전")
  // useEffect문법 arrow함수 재랜더링(state가 바뀔때마다 새고될때마다 라우터가 바뀔때마다 계ㅔㅔㅔㅔㅔㅔ속 실행됨)이 될 때마다 일정시간 로딩 후 실행되는 함수 최초에 실행되는건 다 로딩된 후 useffect가 실행된다. 생각하기에는 실행전 ->실행->실행끝이겠지만 아님x 실행전 실행끝으로 전부 실행된후 useEffect가 실행이 된다. 
  // console.log(typeTxt)
  useEffect(()=>{
    setquizList([...QuizList].slice(0,selected));
    setQuizCnt([...QuizList].filter((e)=>{
      //e.type과 같은 typeTxt를찾고 그 갯수를
      return typeTxt === "전체" ? true : e.type === typeTxt;
    }).length);
    //},[])
    },[typeTxt,selected])

    // console.log(quizList)

// 로딩되고나서 딱 한번만 useEffect를 실행해주려고 하면  },[]) ,하고 []을 입력해준다. ex더보기 했을때 재랜더링 되야하니까 새로 가져와야함 quizList도 재랜더링 되야해서 가져와준거고 재랜더링 되어야할 useState를 대괄호안에 추가 [userName,userName,천개고,만개고,갯수제한없이,계속추가해줌]


  return (
    <>
    <Routes>
      <Route path="/" element={<Main ChangeEvent={ChangeEvent}  userName={userName}  quiz={quiz} selected={selected} quizList={quizList} quizCnt={quizCnt} />}/>
      <Route path="/quiz" element={<Detail quizList={quizList} userName={userName}/>}/>
    </Routes>
    
    </>

  );
}

export default App;
