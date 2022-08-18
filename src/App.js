import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useNavigate
} from "react-router-dom";

const Todo = () => {
  return <div>
    <p>這是 Todo 頁面</p>
    <Logout />
    </div>
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
function Logout() {
  
  let navigate = useNavigate();
 
  return (
    <div>
        <input type="button" value="登出" onClick={()=>navigate('/login')} />
    </div>
  )
}
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

