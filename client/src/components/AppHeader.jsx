import { UserDataContext } from "../App"; //4
import { useContext } from "react"; //5

function AppHeader() {
  const user = useContext(UserDataContext); {/*6*/}
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {user.username}</h2>
    </div>
  );
}

export default AppHeader;
