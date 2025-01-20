import {Route, Routes} from "react-router";
import {DashboardHomePage} from "./pages/Dashboard/Home";
import {DashboardLayot} from "./component/Layout/Dashboard/Layout";
import {DocumentManagement} from "pages/Dashboard/DocumentManagment";

import {DocumentOverview} from "pages/Dashboard/DocumentOverview";
import { Login } from "component/Layout/AuthLayout/Auth/Login";
import { AuthLayout } from "component/Layout/AuthLayout/Layout";
import { Signup } from "component/Layout/AuthLayout/Auth/Signup";
import { HealthProvider } from "component/Layout/AuthLayout/Auth/healthProvider";
import { ForgetPassword } from "component/Layout/AuthLayout/Auth/forgetPassword";
import { PasswordSuccess } from "component/Layout/AuthLayout/Auth/passwordSucess";
import { ResetPassword } from "component/Layout/AuthLayout/Auth/resetPassword";

export default function App() {
  return (
    <Routes>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="health-provider" element={<HealthProvider/>}/>
          <Route path="forget-password" element={<ForgetPassword/>}/>
          <Route path="reset-password" element={<ResetPassword/>}/>
          <Route path="password-success" element={<PasswordSuccess/>}/>

        </Route>

        <Route element={<DashboardLayot/>}>
          <Route index element={<DashboardHomePage />} />
          {/* <Route path="doc-managment" element={<DocumentManagment />} /> */}
          <Route path="document-overview" element={<DocumentOverview />} />
          <Route path="document-managment" element={<DocumentManagement />} />

        </Route>
      </Routes>
  )
}