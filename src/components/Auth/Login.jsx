import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', formData);
            localStorage.setItem('token', res.data.token);  // <-- 'res' use korte hobe
            toast.success(res.data.message || 'Login successful!');
            navigate('/admin');  // Redirect after login
        } catch (err) {
            toast.error(err.response?.data?.error || 'Login failed!');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Toaster />
            <div className="max-w-md w-full bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 border rounded pr-10"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="text-sm text-right">
                        <button type="button" className="text-blue-600 hover:underline" onClick={() => toast('Password reset coming soon!')}>
                            Forgot Password?
                        </button>
                    </div>

                    <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Login</button>
                </form>

                <div className="mt-4 text-center text-sm">
                    Don’t have an account?{' '}
                    <button onClick={() => navigate('/register')} className="text-blue-600 hover:underline">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
