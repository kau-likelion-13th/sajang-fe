import React from "react";

const History = ({ historyData, onCancel }) => {
  const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "COMPLETE":
        return "배송완료";
      case "PROCESSING":
        return "배송중";
      case "CANCEL":
        return "주문취소";
      default:
        return status;
    }
  };
        
  return (
    <div className="history-container-wrap">
        <div className="history-title">나의 쇼핑 내역</div>
        <div className="history-container">
            <table className="history-table" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>주문 일자</th>
                        <th>상품 정보</th>
                        <th>수량</th>
                        <th>구매 금액</th>
                        <th>상태</th>
                        <th>주문 취소</th>
                    </tr>
                </thead>
                <tbody>
                {historyData?.map((item) => (
                  <tr key={item?.orderId}>
                    <td>{formatDate(item?.createdAt)}</td>
                    <td>{item?.item_name}</td>
                    <td>{item?.quantity}</td>
                    <td>{item?.totalPrice}</td>
                    <td>{getStatusLabel(item?.status)}</td>
                    <td>
                      <div className="history-cancel">
                        <div
                          className="history-cancel-button"
                          onClick={() => {
                            if(item?.status === "PROCESSING") {
                              onCancel(item?.orderId);
                            }
                          }}
                          style={{
                            cursor: item?.status === "PROCESSING" ? "pointer" : "not-allowed",
                            opacity: item?.status === "PROCESSING" ? 1 : 0.5
                          }}
                        >  
                          취소
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};
export default History;
