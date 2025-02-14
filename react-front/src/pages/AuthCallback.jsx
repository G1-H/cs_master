import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthCallback = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const queryParams = new URLSearchParams(location.search);
      const provider_id = queryParams.get("provider_id");
      const email = queryParams.get("email");
      const is_registered = queryParams.get("is_registered") === "true"; // 문자열 "true" -> boolean 변환

      if (is_registered) {
        try {
          // ✅ 로그인 API 요청
          console.log("useEffect 실행");
          const loginResponse = await fetch(
            "http://localhost:8080/api/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: email,
                provider_id: provider_id,
                provider: "kakao",
              }),
            }
          );

          const loginData = await loginResponse.json();

          // ✅ JWT 토큰 저장
          localStorage.setItem("access_token", loginData.data.access_token);
          localStorage.setItem("refresh_token", loginData.data.refresh_token);

          // ✅ 로그인 상태 업데이트
          onLoginSuccess();

          // ✅ 로그인 완료 후 마이페이지로 이동
          navigate("/mypage");
        } catch (error) {
          console.error("로그인 처리 중 오류:", error);
        }
      } else {
        // ✅ 회원가입 페이지로 이동
        navigate("/register", { state: { email, provider_id } });
      }
    };

    handleAuthCallback();
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default AuthCallback;
