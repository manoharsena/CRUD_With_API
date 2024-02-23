import React, { useState, useEffect } from "react";
import TopNavbar from "./TopNavbar";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Icon from "react-crud-icons";
import "react-crud-icons/dist/css/react-crud-icons.css";

function Dashboard() {
  const [userData, setUserData] = useState([]);
  let navigate = useNavigate();

  const getUserData = async () => {
    try {
      let res = await axios.get(API_URL);
      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (error) {
      toast.error("Data Fetch Failed");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success("User deleted successfully");
        getUserData();
      }
    } catch (error) {
      toast.error("Delete User failed");
    }
  };

  return (
    <>
      <TopNavbar />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>S.No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Website</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.user_name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone_number}</td>
                  <td>{e.website}</td>

                  <td className="text-center">
                    <Icon
                      name="edit"
                      theme="light"
                      size="medium"
                      tooltip="Edit"
                      onClick={() => navigate(`/edit/${e.id}`)}
                    />
                  </td>
                  <td className="text-center">
                    <Icon
                      name="delete"
                      theme="light"
                      size="medium"
                      tooltip="Delete"
                      onClick={() => handleDelete(e.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
