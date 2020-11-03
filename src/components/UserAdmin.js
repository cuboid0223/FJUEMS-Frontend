import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const UserAdmin = () => {
  return (
    <div className="userAdmin">
      <h5>會員管理</h5>
      <table className="userAdmin__table">
        <colgroup span="4"></colgroup>
        <tr>
          <th>會員 ID</th>
          <th>會員姓名</th>
          <th>會員帳號</th>
          <th>權限</th>
          <th>刪除</th>
        </tr>

        
        <tr>
          <td>162638</td>
          <td>陳泓棣</td>
          <td>yyy32233035</td>
          <td>
            <select className="userAdmin__select">
              <option>一般會員</option>
              <option>管理者</option>
            </select>
          </td>
          <td>
            <HighlightOffIcon className="userAdmin__deleteBtn" />
          </td>
        </tr>



        <tr>
          <td>162638</td>
          <td>陳泓棣</td>
          <td>yyy32233035</td>
          <td>
            <select className="userAdmin__select">
              <option>一般會員</option>
              <option>管理者</option>
            </select>
          </td>
          <td>
            <HighlightOffIcon className="userAdmin__deleteBtn" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserAdmin;
