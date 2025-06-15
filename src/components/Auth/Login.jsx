// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', formData);
      const { message, user } = res.data;

      toast.success(message || 'Login successful!');

      // Store role in localStorage if needed
      localStorage.setItem('userRole', user.role);

      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin/blogs');
      } else {
        navigate('/');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200 overflow-hidden">
      <Toaster />
      <div className="w-[1400px] h-[800px] flex rounded-lg overflow-hidden bg-white shadow-lg">
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/LDp8xcMF/download-2.jpg')" }}
        ></div>
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              Don’t have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-blue-600 hover:underline font-medium"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
