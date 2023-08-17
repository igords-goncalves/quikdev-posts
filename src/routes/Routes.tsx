import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Posts from '../pages/Posts';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
