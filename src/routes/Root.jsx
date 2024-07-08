import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root(){
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="nav-bar">
                        <div className="navbar-brand">
                            <h1>John Doe</h1>
                        </div>
                        <div>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}