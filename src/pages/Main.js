import React from 'react'
import { useNavigate } from 'react-router-dom';

export default 
//{userName, quizList} -> props(js의 파라미터같은넉김~) 넘기는 데이터
function Main({userName, ChangeEvent, quizList, quiz, selected, quizCnt}) {
  let navigate = useNavigate()

  // html몇문제 css몇문제 js몇문제를 해줄거임 QuizList에서 중복을 제거하고 원하는 문제만 출력시켜주면 된다.
  const type = quiz.map(imte => imte.type);
  // 중복을 제거하고 새로운 배열? 을 만들어주는것 
  const typeSelect = [...new Set(type)];
  console.log(type)


  // const TypeSelect = quizList.filter
  // const LengthSelectCnt = quizList.filter(data => {
  //   return console.log(data.type);
  // })

  const nameChk = () =>{
    // userName이 ?비어있다면 :그렇지않다면
    (userName === "" ? function () {
      alert("이름을 입력해주세요");
      document.querySelector("input").focus()
    //()바로 함수 실행해주는것
    }()
     
     : 
     navigate("/quiz")
     )
  }
  //코드 수정으로 바꿔줌 input에 onChange={ChangeEvent} 무언가를 입력하면 defaultValue={userName} 디폴트 값인 userName 빈값이 input에 넣어주고 onCHane가 바꿔주는데 ChangeEvent함수를 실행하면서 바뀌게됨 이건 App.js에서 만들어준 함수ChangeName이고 
  // const ChangeEvent = (e) =>{
  //   // console.log(e)
  //   console.log(e.target)
  //   //e객체의????????????????????????????????????target?????????????? value값을 넘겨준다
  //   ChangeName(e.target.value)

  // }
  
  return (
    <>
        <div className='w-full flex items-center h-full' >
          <div className='mx-auto basis-11/12 lg:basis-10/12'>
            <div className='bg-white rounded-lg p-5 pb-0'>
              <div className='text-center flex flex-wrap justify-between '> 
              {/* userName input에 쓰면 ChangeEvent가 실행됨 onChange는 input으로 넘겨준데이터를 바로 바꿔서 반영해주는것 input에 작성하면 화면에바로 보여짐 */}
                <input defaultValue={userName} 
                className='name boder pl-4 py-2 rounded-md shadow-md outline-none basis-full sm:basis-8/12' type='text' onChange={ChangeEvent} placeholder='이름을 입력해주세요'/>
                {/* index.css에서 작성했던 class 이름만 가져와서 써주면 된다! 벗흔프라이므어리 벝흔프라이머리 wowowowowowowowowowoowwowowowowo조상님들 최고*/}
                <button className='text-sm sm:text-base bg-blue-500 btn-primary hover:bg-blue-700 focus:ring-blue-400 
                sm:py-0 basis-full sm:basis-3/12 mt-5 sm:mt-0 'onClick={()=>nameChk()}>시작하기</button>
                {/* userName값이 비어있지 않다면 span을 출력시켜줌 값이 없다면 아얘 출력 x*/}
                 <h3 className='my-5 basis-full text-center'>{userName !=="" &&  <><span className='text-indigo-500 font-blod'>{userName}님</span> <span>문제 유형은 기본값으로 설정되어 있으며, 총 {quiz.length}문제 중 1문제를 선택하셨습니다.</span></>} </h3>
              </div>
            </div>
            <div className="w-full  bg-white rounded-lg p-5 mt-5 flex justify-between flex-wrap items-center">
              <div className="flex justify-around items-center xl:basis-4/12 basis-full ">
                <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12'>랜덤설정</button>
                <select className='random border rounded basis-6/12 text-center py-1.5' onChange={ChangeEvent} >
                <option value="0">기본</option>
                <option value="1">랜덤</option>
                </select>
              </div>
              <div className="flex justify-around items-center xl:basis-4/12 basis-full">
               <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12 my-5' >개수설정</button>

                <select className='cnt border rounded basis-6/12 text-center py-1.5' onChange={ChangeEvent} defaultValue={selected}>
                  {
                    // 배열생성 데이터는 아무것도 없지만 quizList의 값만큼(quizList.length)채워짐 undefinded값으로 채워진다. 이걸 반복문 돌려주는데 quizCnt로 변수 설정해준거넣어주면 quiz갯수만큼 나옴
                    Array(quizCnt).fill().map((e,i)=>{
                      // console.log(e)
                      // i는 0부터 시작 e가 안되는 이유는 빈값을 만들어서 반복문 돌린거임 const a =["","","","","",""]  e.length 하게 되면 그럼 undefinded라서 안되는건지 e.length가 요소1개에 대한 길이라 안되는지.. 뭐지? 해결! e는 요소를 가져온걸로 끝이라서 뒤에 뭐가 올수 없음! .length 요런거 노노 안됨
                      return  <option value={i+1} key={i}>({i+1}문제)</option>
                      
                    })
                    
              
                  
                  }
                </select>
              </div>
              <div className="flex justify-around items-center xl:basis-4/12 basis-full">
           
                <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12'>문제유형</button>
                <select className='type border rounded basis-6/12 text-center py-1.5 ' onChange={ChangeEvent}>
                <option value="전체">전체 ({quiz.length}문제)</option>
                {
                  typeSelect.map(el =>{
                    // quiz는 quizList가 아니라 원본임 오리지널 원본에서 filter을 할건데 el은 html css js el의 요소이고 e.type(html css js)와 같은걸 필터! 해준다. {}를 쓰게되면 return문을 적어줘야하고 그냥 필터만 써줄때는 return을 생략한다.
                    return <option value={el} key={el}>{el}({quiz.filter(e=> el===e.type).length}문제)</option>
                  })
                }
                </select>
              </div>
            </div>
          </div>
        </div>
    </>
  )
  
}