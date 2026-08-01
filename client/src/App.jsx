import './styles/App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import References from './pages/References';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Admin from "./pages/admin/Admin";
import Footer from "./components/Footer";

import ProjectsList from "./pages/admin/ProjectsList";
import ProjectsForm from "./pages/admin/ProjectsForm";
import ServicesList from "./pages/admin/ServicesList";
import ServicesForm from "./pages/admin/ServicesForm";
import ReferencesList from "./pages/admin/ReferencesList";
import ReferencesForm from "./pages/admin/ReferencesForm";
import UsersList from "./pages/admin/UsersList";
import UsersForm from "./pages/admin/UsersForm";

// app page
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>

      {/* Navigation bar */}
      <Navbar />

      {/* Routes to each page */}
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "/about" element = {<About/>}/>
        <Route path= "/contact" element = {<Contact/>}/>
        <Route path= "/projects" element = {<Projects/>}/>
        <Route path= "/references" element = {<References/>}/>
        <Route path= "/services" element = {<Services/>}/>
        <Route path= "/admin" element = {<Admin/>}/>

        {/* Adding new routes to  PROJECTS forms and pages */}
        <Route path = "/admin/projects" element = {<ProjectsList/>}/>
        <Route path = "/admin/projects/add" element = {<ProjectsForm/>}/>
        <Route path = "/admin/projects/edit/:id" element = {<ProjectsForm/>}/>

        {/* Adding new routes to SERVICES forms and pages */}
        <Route path = "/admin/services" element = {<ServicesList/>}/>
        <Route path = "/admin/services/add" element = {<ServicesForm/>}/>
        <Route path = "/admin/services/edit/:id" element = {<ServicesForm/>}/>

        {/* Adding new routes to REFERENCES forms and pages */}
        <Route path = "/admin/references" element = {<ReferencesList/>}/>
        <Route path = "/admin/references/add" element = {<ReferencesForm/>}/>
        <Route path = "/admin/references/edit/:id" element = {<ReferencesForm/>}/>

        {/* Adding new routes to USERS forms and pages */}
        <Route path = "/admin/users" element = {<UsersList/>}/>
        <Route path = "/admin/users/add" element = {<UsersForm/>}/>
        <Route path = "/admin/users/edit/:id" element = {<UsersForm/>}/>

      </Routes>

      {/* Footer bar */}
      <Footer />

    </div>

  );
}

export default App
