import { useState, useEffect } from "react";
import "./SignIn.scss";

const SignIn = ({isOpen, close, validateRight, validateError}) => {

    const[form, setForm] = useState({
        email: "",
        password: "",
    })

    // 초기값으로는 로그아웃 상태여야 함
    const [data, setData] = useState(false);

    const {email, password} = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 복사
            [e.target.name] : e.target.value // 새로운 값 덮어씌우기
        };
        console.log(email, password);
        setForm(nextForm);
    }

    // *** 트러블 슈팅: useState는 비동기이기 때문에 즉시 반영이 안된다 -> useEffect나 useRef사용해서 수정해야함 
    // data 값이 onClick에서 바뀌면 바로 실행
    useEffect(()=>{
        // 로그인 성공을 하면 부모에 값을 넘겨주기 위해(로그인 성공 여부를 알려주기 위해) data를 true로 바꾼다.
        setData(true);
    }, [data])
  
    //checkStr = checkStr.replace(/\s/g, "");

    const onClick = () => {
      const ckemail = email.replace(/\s/g, "");
      const ckpassword = password.replace(/\s/g, "");

      if (ckemail === ''  || ckpassword === '') {
        alert("모든 값을 입력해주세요"); 
      }else{
                // 임의의 가상 계정, 아래 계정과 일치 시 로그인 성공
                if(email === "test123" && password === "1234") {
                  alert("로그인 성공");
                  // 로그인 성공 여부가 담경 있는 data를 부모에서 넘어온 validate함수에 넣어준다.
                  validateRight(data);
                  close();
              } else{
                  alert("로그인 실패! 다시 시도해주세요.");
              }
      }

        setForm({
            email: "",
            password: "",
        })
        close();

    };

    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };

    return (
      <>
        {isOpen ? (  
          <div className="modal">
            <div onClick={()=> close}>
              <div className="loginModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <h1 className="loginTxt">로그인</h1>
                <div className="modalContents" onClick={() => isOpen}>
                  <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="아이디"
                    onChange={onChange}
                  />
                  <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={onChange}
                  />
                  <button className="loginBtn" onClick={onClick}>
                    {" "}
                    로그인{" "}
                  </button>

                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }


export default SignIn;