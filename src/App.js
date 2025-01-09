import {Route, Routes} from "react-router";
import {DashboardHomePage} from "./pages/Dashboard/Home";
import {DashboardLayot} from "./component/Layout/Dashboard/Layout";
import {DocumentManagement, DocumentManagment} from "pages/Dashboard/DocumentManagment";
import {DocumentOverview} from "pages/Dashboard/DocumentOverview";

export default function App() {
  return (
    <Routes>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

        <Route element={<DashboardLayot/>}>
          <Route index element={<DashboardHomePage />} />
          {/* <Route path="doc-managment" element={<DocumentManagment />} /> */}
          <Route path="document-overview" element={<DocumentOverview />} />
          <Route path="document-managment" element={<DocumentManagement />} />

        </Route>
      </Routes>
  )
}