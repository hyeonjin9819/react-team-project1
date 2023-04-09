import { useState } from "react";
import SignIn from "./SignIn";
import './Check.scss';

const Check = () => {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // 로그인이 정상적으로 되어있는지 아닌지 확인하기 위한 useState
  const[isValidate, setIsValidate] = useState(false);

  // 로그인 정보가 맞다면
  const validateRight = (data) => {
    console.log("로그인 성공")
    setIsValidate(data);
  }
  // 로그아웃 시 isValidate를 false 바꿔줘야한다.
  const validateError = () => setIsValidate(false);

    return (
      <>
      {/* 앞이 ture 뒤가 false -> 로그인 된 상태: true / 로그인 안된 상태: false  */}
      {isValidate ?(
        <>
        <p className="welcomeUser"> 홍길동님 환영합니다.</p>
        <button className="login" onClick={validateError}>로그아웃</button>
        </>
      ) :
      (<>
        <button className="login" onClick={openModal}>로그인</button>
        <SignIn isOpen={isModalOpen} close={closeModal} validateRight={validateRight} />
        </>)}
      </>
    );
}

export default Check;