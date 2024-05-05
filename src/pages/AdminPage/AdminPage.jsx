import { useSelector, useDispatch } from "react-redux";
import "./adminPage.css";
import { selectUser } from "../../store/Slices/UsersSlice/usersSlice";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";
import { deleteUser } from "../../store/Slices/UsersSlice/API";
import { deleteActiveUser } from "../../store/Slices/ActiveUsersSlice/API";

function AdminPage() {
  const { data } = useSelector(selectUser);
  const { activeData } = useSelector(selectActiveUsers);
  const dispatch = useDispatch();

  const handleDel = (id) => {
    if (activeData[0]?.id === id) {
      dispatch(deleteActiveUser(activeData[0]));
    }
    dispatch(deleteUser(id));
  };

  return (
    <div className="adminPage">
      <h1 className="admin-page-text">Admin Page</h1>
      <div className="admin-page-all-users">
        <h2 className="all-users-text">All Users</h2>
        <div className="admin-page-count">
          <div className="admin-page-offline"></div>
          <p>{data.length}</p>
        </div>
        <table>
          <tbody className="all-users">
            {data.map((user) => (
              <tr className="users" key={user?.id}>
                <td>
                  {" "}
                  <img className="adminPage-users-img" src={user?.image} alt="" width={50} />
                </td>
                <td>Name - {user?.userName}</td>
                <td>Email - {user?.email}</td>
                <td>Age - {user?.age}</td>
                <td>Pssword - {user?.password}</td>
                <td>Country - {user?.country}</td>
                <td>ID - {user?.id}</td>
                <td>
                  {" "}
                  <button onClick={() => handleDel(user.id)} className="adminPage-delete-button">
                    {" "}
                    DELETE{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="admin-page-all-users">
        <h2 className="all-users-text">Active Users</h2>
        <div className="admin-page-count">
          <div className="admin-page-active"></div>
          <p>{activeData.length}</p>
        </div>
        <table>
          <tbody className="all-users">
            {activeData.map((active) => (
              <tr className="activeUsers" key={active?.id}>
                <td>
                  <img className="adminPage-users-img" src={active?.image} alt="" width={50} />
                </td>
                <td>Name - {active?.userName}</td>
                <td>Email - {active?.email}</td>
                <td>Age - {active?.age}</td>
                <td>Pssword - {active?.password}</td>
                <td>Country - {active?.country}</td>
                <td>ID: {active?.id}</td>
                <td>Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminPage;
