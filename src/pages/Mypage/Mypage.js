import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "../../styles/Mypage.css";
import Profile from "./Profile";
import Status from "./Status";
import Address from "./Address";
import History from "./History";

const Mypage = () => {
  const [cookies] = useCookies(["accessToken"]);
  const [profileData, setProfileData] = useState(null);
  const [addressData, setAddressData] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  useEffect(() => {
    console.log(cookies);
    console.log(cookies.accessToken);
    cookies.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzOTY2ODQzNTA4IiwiaWF0IjoxNzQ2MDIzMjQ1LCJleHAiOjE3NDYwMjY4NDUsImF1dGhvcml0aWVzIjoiUk9MRV9VU0VSIn0.-oIxclhREdzEda5PlKZWcpv1_uZ6Zk2makL-YpK0SrU";
    if (!cookies.accessToken) return;

    const fetchData = async () => {
      try {
        const [profileRes, addressRes, historyRes] = await Promise.all([
          axios.get("/users/profile", {
            headers: { Authorization: `Bearer ${cookies.accessToken}` },
          }),
          axios.get("/users/address", {
            headers: { Authorization: `Bearer ${cookies.accessToken}` },
          }),
          axios.get("/orders", {
            headers: { Authorization: `Bearer ${cookies.accessToken}` },
          }),
        ]);

        if(profileRes.isSuccess) setProfileData(profileRes.data.result);
        if(addressRes.isSuccess) setAddressData(addressRes.data.result);
        if(historyRes.isSuccess) setHistoryData(historyRes.data.result);
      } catch (err) {
        console.error("API 요청 실패:", err);
      }
    };

    fetchData();
  }, [cookies.accessToken]);

  const handleSave = (zipcode, address, addressDetail) => {
    axios
      .post(
        '/users/address',
        { zipcode, address, addressDetail }, 
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("API 요청 실패:", err);
      });
  };

  const handelCancel = (orderId) => {
    axios
      .put(`/orders/${orderId}/cancel`, {}, {  
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("API 요청 실패:", err);
      });
  };
  return (
    <div className="page-container">
      <Profile profileData={profileData} />
      <Status statusData={profileData?.orderStatusCounts}/>
      <Address addressData={addressData} onSave={handleSave}/>
      <History historyData={historyData} onCancel={handelCancel} />
    </div>
  );
};
export default Mypage;
