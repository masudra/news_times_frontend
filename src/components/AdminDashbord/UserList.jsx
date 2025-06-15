import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState({});

    const fetchUsers = async () => {
        try {
            const res = await axios.get('https://mts-blog-backend1.onrender.com/users');
            setUsers(res.data);

            // Save initial roles
            const rolesMap = {};
            res.data.forEach(user => {
                rolesMap[user._id] = user.role;
            });
            setSelectedRoles(rolesMap);
        } catch (err) {
            toast.error('Failed to fetch users');
        }
    };

    const handleSelectChange = (userId, newRole) => {
        setSelectedRoles(prev => ({ ...prev, [userId]: newRole }));
    };

    const handleRoleUpdate = async (id) => {
        const newRole = selectedRoles[id];
        try {
            await axios.put(`https://mts-blog-backend1.onrender.com/users/${id}/role`, { role: newRole });
            toast.success('Role updated');
            fetchUsers(); // refresh data
        } catch (err) {
            toast.error('Failed to update role');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Role</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                <select
                                    value={selectedRoles[user._id] || user.role}
                                    onChange={(e) => handleSelectChange(user._id, e.target.value)}
                                    className="border p-1 rounded"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleRoleUpdate(user._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
