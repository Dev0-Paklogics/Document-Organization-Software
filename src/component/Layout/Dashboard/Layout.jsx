import { Outlet ,useNavigate } from "react-router";
import { SideBarDashboard } from "./Sidebar";
import { DashboardNavbar } from "./Navbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { checkTokenIsValidFunApi } from "store/auth/services";

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { isAuthenticated, role, otpVerified, validToken } = useSelector(
    (state) => state.auth
  );
  console.log("isAuth 17", isAuthenticated)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (validToken.dataFetched) {
          if (validToken.validToken) {
            if (window.location.pathname.includes("/authentication")) {
              navigate("/");
            }
          } else {
            if (!window.location.pathname.includes("/authentication")) {
              if (!isAuthenticated) {
                navigate("/login");
              }
            }
          }
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [
    isAuthenticated,
    validToken.dataFetched,
    validToken.validToken,
    navigate,
  ]);

  useEffect(() => {
    if (!validToken.dataFetched) {
      dispatch(checkTokenIsValidFunApi());
    }
  }, [dispatch, validToken.dataFetched]);

  if (validToken.isLoading || loading) return <div>Loading...</div>;

  return (
    <>
      {!window.location.pathname.includes("/authentication/") && (
        <>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <SideBarDashboard />

            {/* Main Content */}
            <main className="flex-1  overflow-auto">
              <DashboardNavbar />
              <Outlet />
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
