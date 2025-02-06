import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="profile-section">
            <div className="profile-name"><span className="profile-realName">제리</span>님</div>
            <div className="profile-membership">[VVIP]회원</div>
        </div>
        <div className="profile-section">
            <div className="profile-stat-label">최근 24개월 구매 금액</div>
            <div className="profile-stat-value">123,234,000원</div>
        </div>
        <div className="profile-section">
            <div className="profile-stat-label">마일리지</div>
            <div className="profile-stat-value">100,000원</div>
        </div>
    </div>
  );
};
export default Profile;
