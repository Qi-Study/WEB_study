import "../../components/Main/Main.css";
import myInfo from "../../asset/img/myInfo.png";

const Main = () => {
  return (
    <div>
      <div className="background">
        <div className="nav">
          <div className="navBox">
            <div className="navLeft">
              <p className="logo">Qi</p>
            </div>
            <div className="navMid">
              <p className="messageBoard">게시판</p>
              <p className="game">게임</p>
            </div>
            <div className="navRight">
              <img className="myInfo" src={myInfo} alt="내 정보" />
            </div>
          </div>
        </div>
        <div className="wrap">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
