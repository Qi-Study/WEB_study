import { Link } from "react-router-dom";
import "../../components/Main/MainWrite.css";
import MainNav from "../../components/Main/MainNav";

const Main = () => {
  return (
    <div className="background">
      <MainNav />
      <div className="footer">
        <div className="writeWrap">
          <input className="writeTitle" placeholder="제목을 입력하세요" />
          <textarea
            className="writeContent"
            placeholder="내용을 입력하세요"></textarea>
          <div className="writeBtnBox">
            <Link to="/" className="writeBtn">
              <span className="write">글쓰기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
