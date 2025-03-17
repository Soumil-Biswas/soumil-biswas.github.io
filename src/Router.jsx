import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import Error from "./Content/Error/Error";

import AboutUs from './Content/About/AboutUs';
import Home from './Content/Home/Home';
import Contact from './Content/contact/Contact';
import Programming from "./Content/Programming/Programming";

import Bus from "./utils/Bus";

window.flash = (message, type = "success") =>
    Bus.emit("flash", { message, type });

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="Programming" element={<Programming/>}/>
            <Route path="Projects" element={<Contact/>}/>
            <Route path="About" element={<AboutUs/>}/>
            <Route path="Contact" element={<Contact/>}/>

            <Route
                path="*"
                loader={() => {
                    throw { status: 404, message: "Page Not Found" };
                }}
            />

        </Route>

    )
)