import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
// import UserDetails from './components/UserDetails';
// import AddNew from './components/AddNew';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users/*" element={<Users />} />
    </Routes>
  </BrowserRouter>
  );
}


// function App() {
//   let element = useRoutes([
//     // These are the same as the props you provide to <Route>
//     { path: '/', element: <Home /> },
//     { path: 'users', element: <Users />,
//       // Nested routes use a children property, which is also
//       // the same as <Route>
//       children: [
//         { path: ':id', element: <UserDetails /> },
//         { path: 'new', element: <AddNew /> }
//       ]
//     },
//     // Redirects use a redirectTo property to
//     { path: 'home', redirectTo: '/' },
//     // Not found routes work as you'd expect
//     { path: '*', element: <AddNew /> }
//   ]);

//   // The returned element will render the entire element
//   // hierarchy with all the appropriate context it needs
//   return element;
// }


export default App;