//App.js
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import SignupForm from './components/SignupForm';
import EmployeeTable from './components/EmployeeTable';
import CompanyDetails from './pages/CompanyDetails';
import ProjectForm from './components/ProjectForm';
import Project from './pages/Projects';
import Login from './login/Login';
import AccordionPage from './pages/AccordionPage';



const Layout = ({ children }) => {
  const location = useLocation();
  const shouldHideHeaderFooter = location.pathname === '/';

  return (
    <>
      {!shouldHideHeaderFooter && <Navbar />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout header={<Header />} />}/> */}
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/admin" element={<Layout><Sidebar /></Layout>} />
          <Route path="/signup" element={<Layout><SignupForm /></Layout>} />
          <Route path="/company" element={<Layout><CompanyDetails /></Layout>} />
          <Route path="/admin" element={<Layout><EmployeeTable /></Layout>} />
          <Route path="/add" element={<Layout><SignupForm /></Layout>} />
          <Route path="/update/:id" element={<Layout><SignupForm /></Layout>} />
          <Route path="/projects" element={<Layout><Project /></Layout>} />
          <Route path="/projectsignup" element={<Layout><ProjectForm /></Layout>} />
          <Route path="/employee" element={<Layout><AccordionPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
