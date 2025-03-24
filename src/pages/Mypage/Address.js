import React, { useState } from "react";

const Address = ({ addressData, onSave }) => {
  const [zipcode, setZipcode] = useState(addressData?.zipcode || "");
  const [address, setAddress] = useState(addressData?.address || "");
  const [addressDetail, setAddressDetail] = useState(addressData?.addressDetail || "");

  const handleZipcodeChange = (e) => setZipcode(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleAddressDetailChange = (e) => setAddressDetail(e.target.value);

  return (
    <div className="address-container-wrap">
        <div className="address-title">배송지 관리</div>
        <div className="address-container">
            <div className="address-section">
                <div className="address-post">
                    <input className="address-input-post" value={zipcode} onChange={handleZipcodeChange}/>
                </div>
                <div className="address-button">우편번호 찾기</div>
            </div>
            <div className="address-section">
                <div className="address-base">
                    <input className="address-input-base" value={address} onChange={handleAddressChange}/>
                </div>
            </div>
            <div className="address-section">
                <div className="address-detail">
                    <input className="address-input-detail" value={addressDetail} onChange={handleAddressDetailChange}/>
                </div>
                <div 
                    className="address-button"
                    onClick={() => onSave(zipcode, address, addressDetail)} 
                >
                    저장하기
                </div>
            </div>
        </div>
    </div>
  );
};
export default Address;
