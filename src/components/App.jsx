import '../styles/App.scss';
import BottomNavigation from './CommonUI/BottomNavigation';
import TopNavigation from './CommonUI/TopNavigation';
import { Outlet, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  const PageTitleMap = {
    '/': 'Home',
    '/auth': 'Sign In Or Register',
    '/profile': 'Profile',
    '/dashboard': 'Dashboard',
    '/nutrition': 'Nutrition',
    '/exercise': 'Exercise',
  };

  const path = location.pathname;
  const defaultTitle = path.slice(1).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Woops no title could be found, think of your own and imagine it\'s here';

  const title = PageTitleMap[path] || defaultTitle



  return (
    <div className="container">
      <TopNavigation />

      <main>
        <h1>{title}</h1>
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default App;
