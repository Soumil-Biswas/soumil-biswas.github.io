import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import Error from "./Content/Error/Error";

import AboutUs from './Content/About/AboutUs';
import Home from './Content/Home/Home';
import Quote from "./Content/Home/components/quote/Quote";
import Service from "./Content/Home/components/services/pages/Service";
import Interview from './Content/Interview/Interview';
import Contact from './Content/contact/Contact';
import OurFaqs from "./Content/faqs/OurFaqs";

import Layoutvisa from "./Content/visa/Layoutvisa";
import Visa from "./Content/visa/Visa";
import Contentvisa from "./Content/visa/card-pages/AllCardvisa";

import PaymentSuccess from './Content/Home/components/quote/pages/PaymentSuccess';

import Login from "./Content/Auth/Login";
import Signup from "./Content/Auth/Signup";
import EmailVerified from "./Content/Auth/EmailVerified.jsx";
import VerificationLinkExpired from "./Content/Auth/VerificationLinkExpired.jsx";
import Bus from "./utils/Bus";

import AdminDashboard from "./Content/Admin/AdminDashboard";
import Appointments from "./Content/Admin/Appointments/Appointments";
import ManageAccess from "./Content/Admin/ManageAccess/ManageAccess";
import Subscribers from "./Content/Admin/Subscribers/Subscribers";
import Success from "./Content/Admin/Appointments/Components/Success";
import Pending from "./Content/Admin/Appointments/Components/Pending";

window.flash = (message, type = "success") =>
    Bus.emit("flash", { message, type });

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />

            <Route path="/Visa" element={<Layoutvisa />}>
                <Route index element={<Visa />} />
                <Route path=":id" element={<Contentvisa />} />
            </Route>

            <Route path="/Interview" element={<Interview />} />
            <Route path="/FAQ" element={<OurFaqs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Quote" element={<Quote />} />
            <Route path="/Services" element={<Service />} />


            <Route path="/payment-success" element={<PaymentSuccess />} />

            <Route path="admin"
                loader={AdminDashboard.loader}
                element={<AdminDashboard />}>

                <Route path="appointments" element={<Appointments />}>
                    <Route path="success"
                        loader={Success.loader}
                        element={<Success />} />
                    <Route path="pending"
                        loader={Pending.loader}
                        element={<Pending />} />
                </Route>

                <Route path="subscribers" loader={Subscribers.loader} element={<Subscribers />} />
                <Route path="manage-access" loader={ManageAccess.loader} element={<ManageAccess />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="visa/admin/verify-account/success" element={<EmailVerified />} />
            <Route path="visa/admin/verify-account/link-expired" element={<VerificationLinkExpired />} />

            <Route
                path="*"
                loader={() => {
                    throw { status: 404, message: "Page Not Found" };
                }}
            />

        </Route>

    )
)