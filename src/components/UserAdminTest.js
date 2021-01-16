import React, { useEffect, useState, useRef } from "react";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";
import axios from "axios";

const UserAdminTest = () => {
  const [usersInfo, setUsersInfo] = useState(null);
  const [fetched, setFetched] = useState(false);
  const users = useRef();
  

  const columns = [
    { field: "id", headerName: "編號", width: 130 },
    { field: "user_id", headerName: "ID", width: 130 },
    { field: "user_name", headerName: "姓名", width: 130 },
    { field: "user_account", headerName: "學號", width: 130 },
    {
      field: "auth_name",
      headerName: "權限",
      width: 90,
    },
    {
      field: "dep_name",
      headerName: "單位",
      width: 160,
    },
  ];

  const rows = [
    {
      user_id: "26",
      user_name: "Cuboid",
      user_account: "123",
      auth_name: "admin",
      id: 1,
      dep_name: "教務處",
    },
    {
      user_id: "25",
      user_name: "Auboid",
      user_account: "123",
      auth_name: "admin",
      id: 2,
      dep_name: "教務處",
    },
  ];

  useEffect(() => {
    const ac = new AbortController();
    const getAllUser = () => {
      let id = 1;
      axios
        .get("http://localhost:8888/fjuems/fjuems-backend/getAllUser.php", {
          signal: ac.signal,
        })
        .then((res) => {
          setFetched(true);
          const usersData = res.data;
          // if (mounted) {
          usersData.map((users) => (users["id"] = id++));
          users.current = usersData;
          setUsersInfo(usersData);
          console.log(usersData);
          console.log(typeof users.current);
          console.log(usersInfo);
          //}
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllUser();
    return () => ac.abort(); // Abort both fetches on unmount
    //return () => (mounted = false);
  }, []);

  //const usersList = sessionStorage.getItem("usersList")
  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserAdminTest;
