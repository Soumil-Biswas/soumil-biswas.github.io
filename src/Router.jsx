import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import Error from "./Content/Error/Error";

import Home from './Content/Home/Home';
import Projects from "./Content/Projects/Projects";
import AboutUs from './Content/About/AboutUs';
import Contact from './Content/contact/Contact';
import Programming from "./Content/Programming/Programming";

import Bus from "./utils/Bus";

window.flash = (message, type = "success") =>
    Bus.emit("flash", { message, type });

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="Development" element={<Programming/>}/>
            <Route path="Design" element={<Projects/>}/>
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