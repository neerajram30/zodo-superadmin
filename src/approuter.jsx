import React from "react";
// eslint-disable-next-line no-unused-vars

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
// import config from "config";
//For Settings...
// import Settings from "./components/settings/Settings";
import Settingssociallinks from "./components/settings/Settingssociallinks";
import SettingsChangePassword from "./components/settings/SettingsChangePassword";
//Assest
//Doctor
import DoctorList from "./components/doctor/DoctorList";
//Patients...
//DoctorSchedule

//Departments
import ForgotPassword from "./components/pages/login/ForgotPassword";
import Signup from "./components/pages/login/Signup";

import Register from "./components/pages/login/Register";
import LockScreen from "./components/pages/login/LockScreen";
import ChangePassword from "./components/pages/login/ChangePassword";
import Error from "./components/pages/login/Error";
import ServerError from "./components/pages/login/ServerError";
import BlankPage from "./components/pages/login/BlankPage";
// import Admin_Dashboard from "./components/Dashboard/Admin_Dashboard/Admin_Dashboard";
import Setting from "./components/settings/Setting";
import Hospitals from "./components/pages/Hospitals/Hospitals";
import Doctors from "./components/pages/Doctors/Doctors";
import HospitalDetails from "./components/pages/Hospitals/HospitalDetails";
import EditHospital from "./components/pages/Hospitals/EditHospital";
import FasttagRevenue from "./components/pages/FasttagRevenue";
import SettlementRequests from "./components/pages/SettlementRequests";
import AddHospital from "./components/pages/Hospitals/AddHospital";
import DoctorDetails from "./components/pages/Doctors/DoctorDetails";
import AddDoctors from "./components/pages/Doctors/AddDoctors";
import Specialization from "./components/pages/Doctors/Specialization";
import ManageSettlement from "./components/pages/ManageSettlement";
import FasttagIssued from "./components/pages/FasttagIssued";
// import Dashboard from "./components/Dashboard/Dashboard";

//Accounts
const Approuter = () => {
  // eslint-disable-next-line no-unused-vars
  // const config = "/react/template"
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/edit-profile" element={<EditProfile />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/lockscreen" element={<LockScreen />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/blankpage" element={<BlankPage />} />
          {/* <Route path="/gallery" element={<GalleryImage />} /> */}
          {/* Blog */}
          {/* <Route path="/blog" element={<Blogdetails />} /> */}
          {/* <Route path="/addblog" element={<Addblog />} /> */}
          {/* <Route path="/editblog" element={<Editblog />} /> */}
          {/* <Route path="/blogview" element={<BlogView />} /> */}
          {/* Settings */}
          <Route path="/settings" element={<Setting />} />
          {/* <Route path="/localization" element={<Localization />} /> */}
          {/* <Route path="/paymentsetting" element={<Paymentsetting />} /> */}
          {/* <Route path="/settingsemail" element={<Settingsemail />} /> */}
          {/* <Route
            path="/settingssocialmedia"
            element={<Settingssocialmedia />}
          /> */}
          <Route path="/settingssociallink" element={<Settingssociallinks />} />
          {/* <Route path="/settingsseo" element={<Settingsseo />} /> */}
          {/* <Route path="/settingsthem" element={<SettingsThem />} /> */}
          <Route
            path="/settingschangepassword"
            element={<SettingsChangePassword />}
          />
          {/* <Route path="/settingsothers" element={<SettingsOthers />} /> */}
          {/* Assests */}
          {/* <Route path="/assests" element={<Assests />} /> */}
          {/* <Route path="/addasset" element={<AddAsset />} /> */}
          {/* <Route path="/edit-assets" element={<Edit_Assets />} /> */}
          {/* Doctor  */}

          <Route path="/dashboard/fasttag-revenue" element={<FasttagRevenue/>}/>
          <Route path="dashboard/fasttag-issued" element={<FasttagIssued/>}/>
          <Route path="/dashboard/settlement-requests" element={<SettlementRequests/>}/>
          <Route path="/dashboard/settlement-requests/:id" element={<ManageSettlement/>}/>
          <Route path="/doctorlist" element={<DoctorList />} />
          {/* Manage Hospital */}
          <Route path="/manage-hospitals" element={<Hospitals />} />
          <Route path="/manage-hospitals/add-hospital" element={<AddHospital/>}/>
          <Route path="/manage-hospitals/:id" element={<HospitalDetails />} />
          <Route path="/manage-hospitals/:id/edit" element={<EditHospital />} />
          {/* Manage Doctors */}
          <Route path="/manage-doctors" element={<Doctors />} />
          <Route path="/manage-doctors/:id" element={<DoctorDetails />} />
          <Route path="/manage-doctors/add-doctors" element={<AddDoctors/>}/>
          <Route path="/manage-doctors/specialization" element={<Specialization/>}/>
  
          
          {/* <Route path="/add-doctor" element={<AddDoctor />} /> */}
          {/* <Route path="/editdoctor" element={<EditDoctor />} /> */}
          {/* <Route path="/doctorprofile" element={<DoctorProfile />} /> */}
          {/* <Route path="/doctor-setting" element={<Doctor_Settings />} /> */}
          {/* Patients */}
          {/* <Route path="/patientslist" element={<PatientsList />} /> */}
          {/* <Route path="/addpatients" element={<AddPatients />} /> */}
          {/* <Route path="/editpatients" element={<EditPatients />} /> */}
          {/* <Route path="/patientsprofile" element={<PatientsProfile />} /> */}
          {/* <Route path="/patient-settings" element={<Patient_Settings />} /> */}
          {/* Appoinments */}
          {/* <Route path="/appoinmentlist" element={<AppoinmentList />} /> */}
          {/* <Route path="/addappoinments" element={<AddAppoinments />} /> */}
          {/* <Route path="/editappoinments" element={<EditAppoinments />} /> */}
          {/* DoctorSchedule */}
          {/* <Route path="/schedulelist" element={<ScheduleList />} /> */}
          {/* <Route path="/addschedule" element={<AddSchedule />} /> */}
          {/* <Route path="/editschedule" element={<EditSchedule />} /> */}
          {/* Department */}
          {/* <Route path="/departmentlist" element={<DepartmentList />} /> */}
          {/* <Route path="/add-department" element={<AddDepartment />} /> */}
          {/* <Route path="/editdepartment" element={<EditDepartment />} /> */}
          {/* Staff */}
          {/* <Route path="/stafflist" element={<StaffList />} /> */}
          {/* <Route path="/addstaff" element={<AddStaff />} /> */}
          {/* <Route path="/editstaff" element={<EditStaff />} /> */}
          {/* <Route path="/staffprofile" element={<StaffProfile />} /> */}
          {/* <Route path="/leave" element={<Leave />} /> */}
          {/* <Route path="/add-leave" element={<AddLeave />} /> */}
          {/* <Route path="/editleave" element={<EditLeave />} /> */}
          {/* <Route path="/attendence" element={<Attendence />} /> */}
          {/* <Route path="/holiday" element={<Holiday />} /> */}
          {/* <Route path="/staff-settings" element={<Staff_Settings />} /> */}
          {/* Accounts */}
          {/* <Route path="/providentfund" element={<ProvidentFund />} />
          <Route path="/add-providerfund" element={<Add_ProviderFund />} />
          <Route path="/invoicelist" element={<Invoice />} />
          <Route path="/createinvoice" element={<Create_Invoice />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/addpayment" element={<Add_Payment />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/addexpense" element={<Add_Expense />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/edit-taxes" element={<Edit_Taxes />} />
          <Route path="/addtax" element={<Add_Tax />} />
          <Route path="/edit-provident" element={<Edit_Provident />} />
          <Route path="/edit-payment" element={<Edit_Payment />} /> */}
          {/* /* Payroll */}
          {/* <Route path="/employeesalary" element={<EmployeeSalary />} />
          <Route path="/addsalary" element={<AddEmployeeSalary />} />
          <Route path="/editsalary" element={<EditEmployeeSalery />} />
          <Route path="/payslip" element={<Payslip />} /> */}
          {/* Email */}
          {/* <Route path="/inbox" element={<Inbox />} />
          <Route path="/compose-mail" element={<ComposeMail />} />
          <Route path="/mail-view" element={<MailView />} /> */}
          {/* Activity */}
          {/* <Route path="/user-activity" element={<UserActivity />} /> */}
          {/* ExpenseReport */}
          {/* <Route path="/expense-Report" element={<ExpensesReport />} />
          <Route path="/add-expense" element={<AddExpenses />} />
          <Route path="/invoice-report" element={<Invoice_Report />} />
          <Route path="/edit-expenses" element={<Edit_Expenses />} /> */}
          {/* Chat */}
          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* Call */}
          {/* <Route path="/voice-call" element={<VoiceCall />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/incoming-call" element={<IncomingCall />} /> */}
          {/* Invoice */}
          {/* <Route path="/invoice-list" element={<InvoiceList />} />
          <Route path="/paid-invoice" element={<Paid_Invoice />} />
          <Route path="/overdue-invoice" element={<OverDue />} />
          <Route path="/draft-invoice" element={<Draft_Invoice />} />
          <Route path="/recurring-invoice" element={<Recurring_Invoice />} />
          <Route path="/cancelled-invoice" element={<Cancelled_Invoice />} />
          <Route path="/invoice-grid" element={<Invoice_Grid />} />
          <Route path="/add-invoice" element={<Add_Invoices />} />
          <Route path="/edit-invoice" element={<Edit_Invoices />} />
          <Route path="/invoice-details" element={<Invoice_Details />} />
          <Route
            path="/invoice-settings"
            element={<Invoice_GeneralSettings />}
          />
          <Route path="/tax-settings" element={<Tax_Settings />} />
          <Route path="/bank-settings" element={<Bank_Settings />} /> */}
          {/* ui-elements */}
          {/* <Route path="/ui-kit" element={<UiKit />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/tab" element={<Tab />} /> */}
          {/* Forms */}
          {/* <Route path="/basic-input" element={<BasicInput />} />
          <Route path="/inputgroup" element={<InputGroups />} />
          <Route path="/horizontal-form" element={<HorizontalForm />} />
          <Route path="/vertical-form" element={<VerticalForm />} /> */}
          {/* Tables */}
          {/* <Route path="/basic-table" element={<BasicTable />} />
          <Route path="/data-table" element={<DataTable />} /> */}
          {/* Calender */}
          {/* <Route path="/calender" element={<Calender />} /> */}
          {/* Dashboard */}
          {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
          {/* <Route path="/admin-dashboard" element={<Admin_Dashboard />} /> */}
          {/* <Route path="/doctor-dashboard" element={<Doctor_Dashboard />} />
          <Route path="/patient-dashboard" element={<Patient_Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  );
};

export default Approuter;
