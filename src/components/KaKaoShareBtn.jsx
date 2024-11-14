import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window;

const KaKaoShareBtn = ({ data }) => {
  const url = "https://wintersnackmbtitest.netlify.app/";
  const resultURL = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    if (!window.Kakao.isInitialized())
      Kakao.init("f911a8fe9c3dd0b7299653bf1e529769");
    // console.log(Kakao.isInitialized());
    // Kakao.isInitialized();
  }, []);

  const shareKaKao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나랑 어울리는 겨울간식 MBTI 결과",
        description: `이번겨울 나와 가장 잘어울리는 겨울간식은 ${data.snack} 입니다.`,
        imageUrl: `${url}${data.img}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return <Button onClick={shareKaKao}>카카오톡 공유하기</Button>;
};

export default KaKaoShareBtn;
