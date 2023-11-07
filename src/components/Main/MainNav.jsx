import "./MainNav.css";
import { Link } from "react-router-dom";
import myInfo from "../../asset/img/myInfo.png";

const MainNav = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="navLeft">
          <p className="navLogo">Qi</p>
        </div>
        <div className="navMid">
          <Link to="/" className="navMessageBoard">
            게시판
          </Link>
          <Link to="/game" className="navGame">
            게임
          </Link>
        </div>
        <div className="navRight">
          <img className="navMyInfo" src={myInfo} alt="내 정보" />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
