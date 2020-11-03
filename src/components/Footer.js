import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className='footer__title'>各單位活動數據</h3>
      <table className='footer__table'>
        <tr>
          <th>單位</th>
          <th>活動數量</th>
          <th>參與活動人數</th>
        </tr>

        <tr>
          <td>教務處</td>
          <td>22</td>
          <td>100</td>
        </tr>
      </table>
    </div>
  );
};

export default Footer;
