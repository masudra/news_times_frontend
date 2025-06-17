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
      localStorage.setItem('token', res.data.token);

      toast.success(res.data.message || 'Login successful!');

      // Assuming role comes from res.data.user.role or res.data.role, adjust if different
      const role = res.data.user?.role || res.data.role;

      if (role === 'user') {
        navigate('/');
      } else if (role === 'admin') {
        navigate('/admin/blogs');
      } else {
        // fallback route if no role or unknown role
        navigate('/');
      }

    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Login failed!';
      if (errorMsg.toLowerCase().includes('user')) {
        toast.error('User not found!');
      } else if (errorMsg.toLowerCase().includes('password')) {
        toast.error('Incorrect password!');
      } else {
        toast.error(errorMsg);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200 overflow-hidden -mb-10">
      <Toaster />
      <div className="w-[1400px] h-[800px] flex rounded-lg overflow-hidden bg-white shadow-lg">

        {/* Left Image Section */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/twyZLk9Q/1641200554997.jpg')" }}
        ></div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-lg shadow-md">
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
                <button type="button" className="text-red-600 hover:underline" onClick={() => toast('Password reset coming soon!')}>
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="w-full p-2 bg-red-600 text-white rounded">Login</button>
            </form>

            <div className="mt-4 text-center text-sm">
              Don’t have an account?{' '}
              <button onClick={() => navigate('/register')} className="text-red-600 hover:underline">
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
