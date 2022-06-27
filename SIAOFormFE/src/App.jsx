import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './hooks/useAuth'

import Register from './pages/register/Register'
import AuthLayouts from './layouts/AuthLayouts'
import Login from './pages/user/Login'
import ForgetPassword from './pages/user/ForgetPassword'
import ResetPassword from './pages/user/ResetPassword'

import HomeLayouts from './layouts/HomeLayouts'
import Profile from './pages/forms/Profile'

// Primer Route = Area Publica
function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<AuthLayouts />}>
						<Route index element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="forget-password" element={<ForgetPassword />} />
						<Route path="reset-password/:token" element={<ResetPassword />} />
					</Route>
					<Route path="/dashboard" element={<HomeLayouts />}>
						<Route path="profile" element={<Profile />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App