import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import UserFormEdit from './user.edit';


const UserTable = (props) => {
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const handleEdit = (record) => {
        setIsModalUpdateOpen(true);
        setDataUpdate(record);
    }
    const handleDelete = (record) => {
        console.log(record);
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <EditOutlined style={{ color: "blue" }} onClick={() => handleEdit(record)} />
                    <DeleteOutlined style={{ color: "red" }} onClick={() => handleDelete(record)} />
                </Space>
            ),
        }
    ];

    return (
        <>
            <Table columns={columns} dataSource={props.dataTable} rowKey={"_id"} />
            <UserFormEdit
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                loadUser={props.loadUser}
            />
        </>
    )

}
export default UserTable