import React from "react";

const Address = () => {
  return (
    <div className="address-container-wrap">
        <div className="address-title">배송지 관리</div>
        <div className="address-container">
            <div className="address-section">
                <div className="address-post">
                    <input className="address-input-post" />
                </div>
                <div className="address-button">우편번호 찾기</div>
            </div>
            <div className="address-section">
                <div className="address-base">
                    <input className="address-input-base" />
                </div>
            </div>
            <div className="address-section">
                <div className="address-detail">
                    <input className="address-input-detail" />
                </div>
                <div className="address-button">저장하기</div>
            </div>
        </div>
    </div>
  );
};
export default Address;
