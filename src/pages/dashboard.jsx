import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dashboard.css";
import Header from "../components/header";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const pass = "alisadeghi";
  const [isAuth, setIsAuth] = useState(false);
  const [isData, setIsData] = useState();

  const authcheck = () => {
    var password = document.getElementById("password").value;
    if (password.length !== 0) {
      if (password === pass) {
        toast.success("با موفقیت وارد شدید !");
        setIsAuth(true);
        axios
          .get("https://hooshapi.iran.liara.run/api/v1/getdata")
          .then((res) => {
            setIsData(res.data);
          });
      } else {
        toast.error("رمزعبور اشتباه است !");
        navigate("/");
      }
    } else {
      toast.error("رمز خود را وارد کنید !");
    }
  };
  const Auth = () => {
    return (
      <div className="auth">
        <input
          type="text"
          placeholder="رمزعبور"
          id="password"
        />
        <div>
          <p onClick={authcheck}>ورود</p>
        </div>
      </div>
    );
  };

  if (!isAuth) {
    return (
      <div className="containerApp">
        <div className="header d-flex justify-content-center align-items-center">
          <Header />
        </div>
        <div className="dashboard pt-5">
          <Auth />
        </div>
      </div>
    );
  }
  if (!isData) {
    return (
      <div className="containerApp">
        <div className="header d-flex justify-content-center align-items-center">
          <Header />
        </div>
        <div className="dashboard pt-5">
          <p style={{ color: "white" }}>لطفا صبر کنید ....</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="containerApp"
      style={{ overflowX: "hidden" }}>
      <div className="header d-flex justify-content-center align-items-center">
        <Header text={"تصاویر آپلود شده"} />
      </div>
      <div className="dashboard pt-5">
        <div className="d-flex flex-column w-100">
          <div
            className="d-flex justify-content-center align-items-center "
            style={{
              backgroundColor: "white",
              width: "90%",
              marginLeft: "5%",
              borderRadius: "30px",
              padding: "2vh 2vw 1vh 2vw",
            }}>
            <p style={{ fontWeight: "bolder" }}> تعداد : {isData.length}</p>
          </div>
          {isData.map((data) => {
            return (
              <div className="row d-flex flex-column justify-content-center align-items-center">
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    height: "200px",
                    padding: "2vh 4vw",
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    flexDirection: "row-reverse",
                    width: "90%",
                  }}>
                  <img
                    style={{
                      borderRadius: "20px",
                      objectFit: "contain",
                    }}
                    width={"30%"}
                    height={"100%"}
                    src={data.image}
                    alt={data._id}
                  />
                  <div style={{ direction: "rtl" }}>
                    <p>
                      پاسخ سوال 1 : <span>{data.q1}</span>
                    </p>
                    <p>
                      پاسخ سوال 2 : <span>{data.q2}</span>
                    </p>
                    <p>
                      پاسخ سوال 3 : <span>{data.q3}</span>
                    </p>
                    <p>
                      پاسخ سوال 4 : <span>{data.q4}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
