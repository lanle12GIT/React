import { Input, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.services";
import { Button, notification, Space } from 'antd';

const UserForm = (props) => {
    const { loadUser } = props;
    const [api, contextHolder] = notification.useNotification();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, passWord, phone);

        if (res.data) {
            api['success']({
                message: 'Create User Successfully',
                description:
                    'Create User Successfully: ' + res.data.fullName,
            });
            setIsModalOpen(false);
            setEmail("");
            setFullName("");
            setPassWord("");
            setPhone("");
            await loadUser();

        }
        else {
            api['error']({
                message: "Create User",
                description: JSON.stringify(res.message)
            });
        }

    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEmail("");
        setFullName("");
        setPassWord("");
        setPhone("");
    }
    return (
        <>
            {contextHolder}

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <h3>Table User</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>Create User</Button>
            </div>

            <Modal title="Create User"
                open={isModalOpen}
                onOk={handleClickBtn}
                onCancel={handleCancel}
                okText="Create"
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
                            <span>Email</span>
                            <Input
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </div>

                        <div>
                            <span>Password</span>
                            <Input.Password
                                value={passWord}
                                onChange={(event) => { setPassWord(event.target.value) }} />
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
export default UserForm;
