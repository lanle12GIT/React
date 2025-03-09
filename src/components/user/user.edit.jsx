import { Input, Modal } from "antd";
import { use, useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.services";
import { Button, notification, Space } from 'antd';

const UserFormEdit = (props) => {
    const [api, contextHolder] = notification.useNotification();
    const [id, setId] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const {isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, loadUser} = props;

    useEffect(() => {
        setId(dataUpdate._id);
        setFullName(dataUpdate.fullName);
        setPhone(dataUpdate.phone);
    }, [dataUpdate]);

    const handleEditBtn = async () => {
        const res = await updateUserAPI(props.dataUpdate._id, fullName, phone);

        if (res.data) {
            api['success']({
                message: 'Update User Successfully',
                description:
                    'Update User Successfully: ' + res.data.fullName,
            });
            setIsModalUpdateOpen(false);
            setFullName("");
            setPhone("");
            await loadUser();

        }
        else {
            api['error']({
                message: "Update User",
                description: JSON.stringify(res.message)
            });
        }

    };

    const handleCancel = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setPhone("");
    }
    return (
        <>
            {contextHolder}

            <Modal title="Edit User"
                open={isModalUpdateOpen}
                onOk={handleEditBtn}
                onCancel={handleCancel}
                okText="Save"
                cancelText="Cancel"
                maskClosable={false}
            >
                <div className="user-form" style={{ margin: "25px 0" }}>
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <div>
                            <span>FullName</span>
                            <Input value={fullName}
                                onChange={(event) => { setFullName(event.target.value) }} />
                        </div>

                        <div>
                            <span>PhoneNumber</span>
                            <Input value={phone}
                                onChange={(event) => { setPhone(event.target.value) }} />
                        </div>
                        
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default UserFormEdit;
