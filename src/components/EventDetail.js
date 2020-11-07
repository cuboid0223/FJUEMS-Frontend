import React from "react";

const EventDetail = ({ photoURL, title, date }) => {
  return (
    <div className="eventDetail">
      <img
        src="https://t.kfs.io/organization_resource_files/8544/36955/__________1200x630__1_.jpg"
        alt="..."
        className="eventDetail__banner"
      />

      <div className="eventDetail__info">
        <h3>title</h3>
        <p>date</p>
        <mark>.... markdown 語法傳入</mark>
        <p>
          人生就是一場旅行 我們向著未知出發 不斷相遇 不問目的 旅程還遙遠
          在下個終點之前 記得沿途風景如詩變遷 記得你我曾經結伴同行
        </p>
        <hr />
        <p>
          演出時間：2020/12/19 (六) PM 19:30 2020/12/20 (日) PM 16:00
          入場時間：2020/12/19 (六) PM 18:00 (依現場實際情況而定) 2020/12/20
          (日) PM 14:30 (依現場實際情況而定) 演出地點：高雄巨蛋
          演出地址：高雄市左營區博愛二路757號 售票日期：2020/09/30(三)
          晚上19點至23點 A-Lin官網會員 優先預購 (僅限KKTIX網站購票)
          ✪凡於會員預購當日購票者，憑票券於演唱會當天贈演唱會原版海報一張
          2020/10/11(日) 早上11點 正式啟售 購票方式：KKTIX及全台全家便利商店
          票價：3,800／3,200／3,000／2,800／2,500／2,200／2,000／1,800／1,500／800
          (對號入座)
        </p>
      </div>
      <hr />
      <div className="eventDetail__input">
        <input type="submit" value="立即報名" className="eventDetail__join" />
        <input type="submit" value="取消報名" className="eventDetail__inJoin" />
        <input type="submit" value="修改活動" className="eventDetail__update" />
        <input type="submit" value="刪除活動" className="eventDetail__delete" />
      </div>
    </div>
  );
};

export default EventDetail;
