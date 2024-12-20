// import React from 'react';
// import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAppSelector, useAppDispatch } from '../../providers/redux/hooks';
// import { logout } from '../../providers/redux/slices/auth/authSlice';
// import { FaPlus } from 'react-icons/fa';

// export default function Header(): React.JSX.Element {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const userName = useAppSelector((state) => state.auth.user?.name);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <header>
//       <Navbar expand="lg" className="bg-white shadow-sm py-3">
//         <Container className="d-flex justify-content-between align-items-center">
//           {/* Логотип и ссылки слева */}
//           <div className="d-flex align-items-center">
//             <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//               <span style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '10px' }}>
//                 Эльбрус
//               </span>
//               <span style={{ fontSize: '1.5rem', fontWeight: 'lighter' }}>Книги</span>
//             </Navbar.Brand>
//             <Nav className="d-flex align-items-center">
//               <Link className="nav-link mx-3" to="/my-books">
//                 Мои книги
//               </Link>
//             </Nav>
//           </div>

//           {/* Кнопка по центру */}
//           <div>
//             <Button
//               variant="link"
//               onClick={() => navigate('/new')}
//               className="d-flex align-items-center justify-content-center"
//               style={{
//                 padding: '0',
//                 border: 'none',
//                 backgroundColor: 'transparent',
//                 color: 'black',
//                 fontSize: '1rem',
//                 textDecoration: 'none',
//               }}
//             >
//               <FaPlus className="me-2" />
//               Добавить книгу
//             </Button>
//           </div>

//           {/* Информация о пользователе и кнопки справа */}
//           <div className="d-flex align-items-center">
//             {userName && (
//               <span className="me-3" style={{ fontWeight: 'bold' }}>
//                 {userName}
//               </span>
//             )}
//             {userName ? (
//               <Button variant="outline-danger" onClick={handleLogout}>
//                 Logout
//               </Button>
//             ) : (
//               <div className="d-flex align-items-center">
//                 <Link className="btn btn-outline-primary me-2" to="/login">
//                   Login
//                 </Link>
//                 <Link className="btn btn-outline-success" to="/signup">
//                   Signup
//                 </Link>
//               </div>
//             )}
//           </div>
//         </Container>
//       </Navbar>
//     </header>
//   );
// }

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink as RouterLink } from 'react-router';
// import { useAppDispatch, useAppSelector } from '../../6_shared/lib/hooks';
// import { Button } from 'react-bootstrap';
// import { logoutThunk } from '../../4_features/auth/model/authThunks';
// import { AuthStatus } from '../../4_features/auth/model/auth.types';

// export default function Header(): React.JSX.Element {
//   const data = useAppSelector((store) => store.auth.data);
//   const dispatch = useAppDispatch();

//   return (
//     <Navbar bg="primary" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="/">
//           {data.status === AuthStatus.authenticated ? data.user.name : 'Гость'}
//         </Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link as={RouterLink} to="/">
//             Главная
//           </Nav.Link>
//           <Nav.Link as={RouterLink} to="/notes">
//             Notes
//           </Nav.Link>
//           {data.status === AuthStatus.authenticated ? (
//             <>
//               <Nav.Link as={RouterLink} to="/notes/add">
//                 Добавить
//               </Nav.Link>
//               <Nav.Link as={RouterLink} to="/account">
//                 Личный кабинет
//               </Nav.Link>
//               <Nav.Link
//                 as={Button}
//                 onClick={() => {
//                   void dispatch(logoutThunk());
//                 }}
//               >
//                 Выход
//               </Nav.Link>
//             </>
//           ) : (
//             <>
//               <Nav.Link as={RouterLink} to="/auth/signup">
//                 Регистрация
//               </Nav.Link>
//               <Nav.Link as={RouterLink} to="/auth/login">
//                 Вход
//               </Nav.Link>
//             </>
//           )}
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink as RouterLink, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../6_shared/lib/hooks';
import { logoutThunk } from '../../4_features/auth/model/authThunks';
import { AuthStatus } from '../../4_features/auth/model/auth.types';
import { FaPlus } from 'react-icons/fa';

export default function Header(): React.JSX.Element {
  const data = useAppSelector((store) => store.auth.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <header>
      <Navbar expand="lg" className="bg-white shadow-sm py-3">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Логотип и ссылки слева */}
          <div className="d-flex align-items-center">
            <Navbar.Brand as={RouterLink} to="/" className="d-flex align-items-center">
              <span style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '10px' }}>
                Эльбрус
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'lighter' }}>Заметки</span>
            </Navbar.Brand>
            <Nav className="d-flex align-items-center">
              <Nav.Link as={RouterLink} to="/">
                Главная
              </Nav.Link>
              <Nav.Link as={RouterLink} to="/notes">
                Notes
              </Nav.Link>
            </Nav>
          </div>

          {/* Кнопка "Добавить заметку" */}
          {data.status === AuthStatus.authenticated && (
            <div>
              <Button
                variant="link"
                onClick={() => navigate('/notes/add')}
                className="d-flex align-items-center justify-content-center"
                style={{
                  padding: '0',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: 'black',
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                <FaPlus className="me-2" /> Добавить заметку
              </Button>
            </div>
          )}

          {/* Информация о пользователе и управление */}
          <div className="d-flex align-items-center">
            {data.status === AuthStatus.authenticated ? (
              <>
                <span className="me-3" style={{ fontWeight: 'bold' }}>
                  {data.user.name}
                </span>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    void dispatch(logoutThunk());
                  }}
                >
                  Выход
                </Button>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <Nav.Link as={RouterLink} to="/auth/login" className="btn btn-outline-primary me-2">
                  Login
                </Nav.Link>
                <Nav.Link as={RouterLink} to="/auth/signup" className="btn btn-outline-success">
                  Signup
                </Nav.Link>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
