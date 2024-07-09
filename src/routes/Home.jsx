import Contact from "../routes/Contact"
import Projects from "./Projects"

const Home = () => {
    return (
        <div className="container">
            <section id="home" className="row">
                <div className="col-6 cta">
                    <h1>Hi I'm <b>John Doe</b></h1>
                    <h4>UI/UX Designer, Full Stack Web Developer</h4>
                    <button className="btn bg-teal rounded-pill">Contact Me</button>
                    <div class="social-icons">
                        <a href="https://wa.link/qzr5w3"><img src="/icons/icons8-whatsapp.svg" alt="WhatsApp"/></a>
                        <a href="https://www.instagram.com/kodeshapiro/"><img src="/icons/icons8-instagram.svg" alt="Instagram"/></a>
                        <a href="https://www.linkedin.com/in/shepherd-mhlanga-520652213"><img src="/icons/icons8-linkedin.svg" alt="LinkedIn"/></a>
                    </div>
                </div>

                <div className="col-6 hero-image">
                    <img className=" img-fluid max-width: 50%;" src="h/images/home-image.jpg" alt="Hero image"/>
                </div>
            </section>

            <section id="about" className="container">
                <h2>About Me</h2>
                <div className="row">
                    <img className="col-6 img-fluid max-width: 50%;" src="h/images/about-image.jpg" alt="About me image"/>
                    <div className="col-6">
                        <p>Hello! I'm John Doe, a passionate and dedicated web developer based in Johannesburg. With a strong background in creating visually appealing and highly functional websites, I specialize in both frontend and backend development. My journey into web development started from a love for technology and a desire to bring ideas to life through code.</p>
                        <p>As a web developer, I have honed my skills in HTML5, CSS3, JavaScript, and various frontend frameworks like React. On the backend, I'm proficient in Node.js and Express.js, with experience in Firebase for database management. My toolkit also includes design tools like Figma, and I'm adept at using Git and GitHub for version control, ensuring smooth collaboration and efficient project management.</p>
                    </div>
                </div>
                <div className="row">
                    <h3>Skills & Technologies</h3>
                    <div className="row"> 
                        <div className="col-md-4"> 
                            <h3>Frontend</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3 + Bootstrap</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Backend</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Tools</h3>
                            <ul>
                                <li>Figma</li>
                                <li>Git and Github</li>
                                <li>VS Code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services">
                <h2>Services</h2>

                <div className="row services-grid">
                    <div className="col-sm-6 services-card">
                        {/* <img src="#" alt="Web Design"/> */}
                        <h3>Web Design</h3>
                        <p>I craft visually appealing and user-friendly websites that are optimized for performance and responsiveness across all devices.</p> 
                    </div>

                    <div className="col-sm-6 services-card">
                        {/* <img src="#" alt="Custom website"/> */}
                        <h3>Customizable Websites</h3>
                        <p>Get a website tailored to your unique needs and brand identity. I offer flexible solutions that can be customized to grow with your business.</p>
                    </div>

                    <div className="col-sm-6 services-card">
                        {/* <img src="#" alt="Ecommerce"/> */}
                        <h3>Ecommerce Solutions</h3>
                        <p>Launch your online store with confidence. I provide end-to-end ecommerce development, from product catalogs to secure payment gateways.</p>
                    </div>

                    <div className="col-sm-6 services-card">
                        {/* <img src="#" alt="Website maintainence"/> */}
                        <h3>Website Maintenance & Updates</h3>
                        <p>Keep your website running smoothly with ongoing maintenance, updates, and technical support to ensure optimal performance and security.</p>
                    </div>
                </div>
            </section>

            <section id="projects" className="container">
                <Projects/>
            </section>

            <section id="contact" className="row">
                <Contact/>
            </section>
        </div>
    )
}

export default Home