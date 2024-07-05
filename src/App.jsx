import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Meetups from "./components/Meetups";
import Help from './components/Help';
import SideCard from'./components/SideCard';
import Features from "./components/Features";
import SiteFooter from "./components/SiteFooter";
import ProfileCard from "./components/ProfileCard";
import Careers from "./components/Careers";
import FAQ from "./components/FAQ";
import TrustAndSafetyPage from "./components/TrustAndSafetyPage";
import SafeDatingTips from "./components/SafeDatingTips";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SecurityPage from "./components/SecurityPage";
import Terms from "./components/Terms";
import UserDetail from "./components/UserDetail";

function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <div className="App mt-32">
           <Features/>
          <SideCard
        />
       </div>
       <SiteFooter/>
        </>
      ),
    },
    {
      path: "/Discover",
      element: (
        <>
          <Navbar />
          <Meetups />
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
           <ProfileCard />
          </div>
          <SiteFooter/>
        </>
      ),
    },
    {
      path: "/Help",
      element: (
        <>
          <Navbar />
          <Help />
          <SiteFooter/>
        </>
      ),
    },
    {
      path:"/Careers",
      element:(
        <>
         <Navbar />
        <Careers/>
        <SiteFooter/>
        </>
      ),
    },
    {
      path:"/FAQ",
      element:(
        <>
         <Navbar />
        <FAQ />
        <SiteFooter/>
        </>
      ),
    },
    {
      path:"/TrustAndSafetyPage",
      element:(
        <>
         <Navbar />
        <TrustAndSafetyPage />
        <SiteFooter/>
        </>
      ),
    },
    {
      path:"/SafeDatingTips",
      element:(
        <>
         <Navbar />
         <SafeDatingTips/>
        <SiteFooter/>
        </>
      ),
    },
    {
      path:"/PrivacyPolicy",
      element:(
        <>
         <Navbar />
         <PrivacyPolicy/>
        <SiteFooter/>
        </>
      ),
    },
    {
      path:"/SecurityPage",
      element:(
        <>
         <Navbar />
         <SecurityPage/>
        <SiteFooter/>
        </>
      ),
    },
    {
      path:"/Terms",
      element:(
        <>
         <Navbar />
         <Terms/>
        <SiteFooter/>
        </>
      ),
    },
    {
      path:"/UserDetail",
      element:(
        <>
         <Navbar />
        <UserDetail />
        <SiteFooter/>
        </>
      ),
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;