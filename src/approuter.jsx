// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Settingssociallinks from "./components/settings/Settingssociallinks";
import SettingsChangePassword from "./components/settings/SettingsChangePassword";
import DoctorList from "./components/doctor/DoctorList";
import ForgotPassword from "./components/pages/login/ForgotPassword";
import Signup from "./components/pages/login/Signup";
import Register from "./components/pages/login/Register";
import LockScreen from "./components/pages/login/LockScreen";
import ChangePassword from "./components/pages/login/ChangePassword";
import Error from "./components/pages/login/Error";
import ServerError from "./components/pages/login/ServerError";
import BlankPage from "./components/pages/login/BlankPage";
import Setting from "./components/settings/Setting";
import Hospitals from "./components/pages/Hospitals/Hospitals";
import Doctors from "./components/pages/Doctors/Doctors";
import HospitalDetails from "./components/pages/Hospitals/HospitalDetails";
import EditHospital from "./components/pages/Hospitals/EditHospital";
import AddHospital from "./components/pages/Hospitals/AddHospital";
import DoctorDetails from "./components/pages/Doctors/DoctorDetails";
import AddDoctors from "./components/pages/Doctors/AddDoctors";
import Specialization from "./components/pages/Doctors/Specialization";
import FasttagIssued from "./components/pages/Dashboard/FasttagIssued";
import FasttagRevenue from "./components/pages/Dashboard/FasttagRevenue";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import DoctorRequest from "./components/pages/Doctors/DoctorRequest";
import EditDoctor from "./components/pages/Doctors/EditDoctor";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "./hooks/auth/useAuth";
import ReviewHospital from "./components/pages/Hospitals/ReviewHospital";
import ReviewEdit from "./components/pages/Hospitals/ReviewEdit";
import EditDoctotRequest from "./components/pages/Doctors/EditDoctotRequest";
import SettlementPage from "./components/pages/Settlement/SettlementPage";
import PublicRoute from "./PublicRoute";
import FinancePage from "./components/pages/FinancePage";
import SettlementDetails from "./components/pages/Settlement/SettlementDetails";
import ManageBanner from "./components/pages/AppManage/ManageBanner";
import AppLink from "./components/pages/AppManage/AppLink";
import Platform from "./components/pages/AppManage/Platform";
import Notifications from "./components/pages/AppManage/Notifications";

//Accounts
const Approuter = () => {
  // eslint-disable-next-line no-unused-vars
  // const config = "/react/template"
  const { user } = useAuth();
  return (
    <>
      <ToastContainer />
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/register" element={<Register />} />
            <Route path="/lockscreen" element={<LockScreen />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            {/* <Route path="/error" element={<Error />} /> */}
            {/* <Route path="/server-error" element={<ServerError />} /> */}
            <Route path="/blankpage" element={<BlankPage />} />
          </Route>
          <Route
            element={
              <ProtectedRoute
                allowedRoles={user?.user_type && ["superAdmin"]}
              />
            }
          >
            <Route path="/settings" element={<Setting />} />
            <Route
              path="/settingssociallink"
              element={<Settingssociallinks />}
            />
            <Route
              path="/settingschangepassword"
              element={<SettingsChangePassword />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/fasttag-revenue"
              element={<FasttagRevenue />}
            />
            <Route
              path="dashboard/fasttag-issued"
              element={<FasttagIssued />}
            />
            {/* <Route
              path="/dashboard/settlement-requests"
              element={<SettlementRequests />}
            /> */}
            <Route
              path="/dashboard/settlement-requests"
              element={<SettlementPage />}
            />
            <Route
              path="/dashboard/settlement-requests/:id"
              element={<SettlementDetails />}
            />
            {/* <Route
              path="/dashboard/settlement-requests/manage-request/:id"
              element={<SettlementDetails />}
            /> */}
            {/* <Route
            path="/dashboard/fasttag-issued/:id"
            element={<FasttagDetails />}
          /> */}
            <Route path="/doctorlist" element={<DoctorList />} />
            {/* Manage Hospital */}
            <Route path="/manage-hospitals" element={<Hospitals />} />

            <Route
              path="/manage-hospitals/add-hospital"
              element={<AddHospital />}
            />
            <Route path="/manage-hospitals/:id" element={<HospitalDetails />} />
            {/* <Route
              path="/manage-hospitals/manage-request/:id"
              element={<ManageRequest />}
            /> */}

            <Route
              path="/manage-hospitals/manage-request/:id" 
              element={<ReviewHospital />}
            />
            {/* <Route
              path="/manage-hospitals/manage-request/:id/edit"
              element={<EditHospital />}
            /> */}
            <Route
              path="/manage-hospitals/:id/edit"
              element={<EditHospital />}
            />

            <Route
              path="/manage-hospitals/manage-request/:id/edit"
              element={<ReviewEdit />}
            />
            {/* Manage Doctors */}
            <Route path="/manage-doctors" element={<Doctors />} />
            <Route path="/manage-doctors/:id" element={<DoctorDetails />} />
            <Route
              path="/manage-doctors/add-doctors"
              element={<AddDoctors />}
            />
            <Route path="/manage-doctors/:id/edit" element={<EditDoctor />} />
            {/* <Route
              path="manage-doctors/request/:id/edit"
              element={<EditDoctor />}
            /> */}

            <Route
              path="/manage-doctors/request/:id"
              element={<DoctorRequest />}
            />
            <Route
              path="/manage-doctors/request/:id/edit"
              element={<EditDoctotRequest />}
            />
            <Route
              path="/manage-doctors/specialization"
              element={<Specialization />}
            />
            <Route
              path="/finance"
              element={<FinancePage/>}
            />
            <Route
              path="/app-manage"
              element={<ManageBanner/>}
            />
            <Route
              path="/app-link"
              element={<AppLink/>}
            />
            <Route
              path="/platform"
              element={<Platform/>}
            />
            <Route
              path="/notifications"
              element={<Notifications/>}
            />
          </Route>
          {/* Unauthorised routes       */}
          <Route path="/unauthorized" element={<ServerError />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  );
};

export default Approuter;
