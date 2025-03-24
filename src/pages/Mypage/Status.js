import React from "react";

const Status = ({ statusData }) => {
  return (
    <div className="status-container-wrap">
        <div className="status-title">나의 주문 현황</div>
        <div className="status-container">
            <div className="status-section">
                <div className="status-label">배송중</div>
                <div className="status-value">{statusData?.PROCESSING}</div>
            </div>
            <div className="status-section">
                <div className="status-label">배송완료</div>
                <div className="status-value">{statusData?.COMPLETE}</div>
            </div>
            <div className="status-section">
                <div className="status-label">주문취소</div>
                <div className="status-value">{statusData?.CANCEL}</div>
            </div>
        </div>
    </div>
  );
};
export default Status;
