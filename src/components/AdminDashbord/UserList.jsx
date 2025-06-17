import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState({});

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5000/users');
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
            await axios.put(`http://localhost:5000/users/${id}/role`, { role: newRole });
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
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="bg-black py-4 px-6">
                    <h1 className="text-3xl font-bold text-white">User Management</h1>
                    <p className="text-sm text-red-500">Manage user roles with ease</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map(user => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <select
                                            value={selectedRoles[user._id] || user.role}
                                            onChange={(e) => handleSelectChange(user._id, e.target.value)}
                                            className="border border-gray-300 text-sm px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                        >
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => handleRoleUpdate(user._id)}
                                            className="bg-red-600 text-white text-sm px-4 py-1.5 rounded hover:bg-red-700 transition"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
