import "../../components/Main/Main.css";
import { Link } from "react-router-dom";
import MainNav from "../../components/Main/MainNav";

const Main = () => {
  return (
    <div className="background">
      <MainNav />
      <div className="footer">
        <div className="postWrap">
          <div className="postHead">
            <input className="postSearch" />
            <Link to="/write" className="postWriteBtn">
              <span className="postWrite">글쓰기</span>
            </Link>
          </div>
          <ul className="postBody">
            <li className="postNav">
              <div className="postNumBox">
                <span className="postNum">번호</span>
              </div>
              <div className="postTitleBox">
                <p className="postTitle">제목</p>
              </div>
              <div className="postWriterBox">
                <span className="postWriter">작성자</span>
              </div>
              <div className="postDateBox">
                <span className="postDate">작성일</span>
              </div>
              <div className="postViewCountBox">
                <span className="postViewCount">조회수</span>
              </div>
            </li>
            <li className="addPost"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
