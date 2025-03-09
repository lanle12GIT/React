import UserTable from "../components/user/usertable";
import UserForm from "../components/user/user.form";
import React, { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.services';
const Users = () => {
    const [userDatas, setUserDatas] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setUserDatas(res.data);
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataTable={userDatas} loadUser={loadUser}/>
        </div>

    )
}

export default Users;