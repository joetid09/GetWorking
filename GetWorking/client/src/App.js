import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import AppHeader from "./components/AppHeader"
import { Sidebar } from "./AppSidebar"
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer position="bottom-right" hideProgressBar /> */}
      <UserProfileProvider>
        <Router>
          <AppHeader />
          <ApplicationViews />
        </Router>
      </UserProfileProvider>
    </div>
  );
}

export default App;