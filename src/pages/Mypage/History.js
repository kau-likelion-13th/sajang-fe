import React from "react";

const mockData = [
    { 
        date: "2025-01-01",
        title: "엑스 베티버 오 드 퍼퓸",
        quantity: "1",
        amount: "135,000",
        status: "배송중"

    },
    { 
        date: "2025-01-01",
        title: "엑스 베티버 오 드 퍼퓸",
        quantity: "1",
        amount: "135,000",
        status: "배송중"

    }
];

const History = () => {
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
                    {mockData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                            <td>
                                <div className="history-cancel">
                                    <div className="history-cancel-button">취소</div>
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
