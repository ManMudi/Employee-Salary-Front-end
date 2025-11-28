import { Application } from "./pages/application";
import { Footer } from "./pages/footer";
import { Header } from "./pages/Header";
import { Home } from "./pages/home";
import { Job } from "./pages/job";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Role } from "./pages/role";
import { Route } from "./pages/Route";
import { User } from "./pages/user";


function App() {
  
  return (
   <>
    <Header/>
   <Route path='/'>
   <Home/>
   </Route>
   <Route path="/role">
    <Role/>
   </Route>
   <Route path="/register">
    <Register/>
   </Route>
   <Route path='/job'>
    <Job/>
   </Route>
   <Route path='/application'>
    <Application/>
   </Route>
   <Route path='/login'>
    <Login/>
   </Route>
   <Route path='/user'>
    <User/>
   </Route>
   <Footer/>
   </>
  );
}

export default App;
