import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  // 슬라이드 설정
  const settings = {
    dots: true, // 하단 도트 표시
    infinite: true, // 무한 반복
    speed: 500, // 전환 속도 (ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 속도 (ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
  };

  // 배너 이미지 배열
  const images = [
    `${process.env.PUBLIC_URL}/img/banner_background_1.jpg`,
    `${process.env.PUBLIC_URL}/img/banner_background_2.jpg`,
    `${process.env.PUBLIC_URL}/img/banner_background_3.jpg`,
  ];

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`slide-${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Banner;
