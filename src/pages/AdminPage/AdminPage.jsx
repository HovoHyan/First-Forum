import { useSelector, useDispatch } from 'react-redux';
import './adminPage.css';
import { selectUser } from '../../store/Slices/UsersSlice/usersSlice';
import { selectActiveUsers } from '../../store/Slices/ActiveUsersSlice/activeUsersSlice';
import { useEffect, useState } from 'react';
import { fetchGetAllUsers } from '../../store/Slices/UsersSlice/API';
function AdminPage () {
    const { data } = useSelector(selectUser);
    const { activeData } = useSelector(selectActiveUsers);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGetAllUsers());
    }, [])

    const deleteUser = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <div className='adminPage'>
            <h1 className='admin-page-text'>Admin Page</h1>
            <div className='admin-page-all-users'>
                <h2 className='all-users-text'>All Users</h2>
                <div className='admin-page-count'>
                    <div className='admin-page-offline'></div>
                    <p>{data.length}</p>
                </div>
                <div className='all-users'>
                    {
                        data.map((user) => (
                            <div className='users' key={user?.id}>
                                <img src={user?.image} alt="" width={50}/>
                                <p>Name - {user?.userName}</p>
                                <p>Email - {user?.email}</p>
                                <p>Age - {user?.age}</p>
                                <p>Pssword - {user?.password}</p>
                                <p>Country - {user?.country}</p>
                                <p>ID - {user?.id}</p>
                                <button onClick={() => deleteUser(user.id)}> DELETE </button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='admin-page-all-users'>
                <h2 className='all-users-text'>Active Users</h2>
                <div className='admin-page-count'>
                    <div className='admin-page-active'></div>
                    <p>{activeData.length}</p>
                </div>
                <div className='all-users'>
                    {
                        activeData.map((active) => (
                            <div className='activeUsers' key={active?.id}>
                                <img src={active?.image} alt="" width={50}/>
                                <p>Name - {active?.userName}</p>
                                <p>Email - {active?.email}</p>
                                <p>Age - {active?.age}</p>
                                <p>Pssword - {active?.password}</p>
                                <p>Country - {active?.country}</p>
                                <p>ID: {active?.id}</p>
                                <p>Active</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default AdminPage;