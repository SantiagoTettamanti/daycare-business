import '../index.css'
import './landing.css'
import firstImage from './landing-assets/landing-background-image.jpg'
import santi from '../assets/santi.png'
import susi from '../assets/susi.png'
import crayons from '../assets/crayons.png'
import books from '../assets/books.png'
import woodset from '../assets/woodset.png'

export default function Landing() {
    return (
        <main>
            {/* <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <img src={firstImage} alt="Matias" />
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <img src={secondImage} alt="Emilia" />
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




            <div className="container marketing">


                <div className="row">
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2>Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                </div> 
            </div> */}

            {/* <div className='landing container-fluid'>
                <div className="row d-flex flex-row justify-content-center align-items-center">
                    <h1 className='title'>Susi's Daycare</h1>
                    <img src={firstImage} alt="" />
                </div>
            </div> */}

            <div className='landing'>

                <h1 className='title'>Susi's Daycare</h1>
                <img className='landing-img' src={firstImage} alt="" />

            </div>





            <div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading info-title">Welcome! </h2>
                        <p className="lead information">Welcome to Susi's Daycare, where we believe in nurturing every child's potential in a safe and loving environment. Our dedicated team is committed to providing the highest quality care, ensuring each child feels valued and supported every day.</p>
                    </div>
                    <div className="col-md-5">
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                        <img src={crayons} alt="" />
                    </div>
                </div>


                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading info-title">Our Philosophy</h2>
                        <p className="lead information">At Susi's Daycare, we embrace a philosophy that centers on holistic child development. We believe in fostering curiosity, creativity, and independence through engaging activities and thoughtful guidance. Our approach ensures each child's unique strengths are celebrated, setting a foundation for lifelong learning and success.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                        <img src={books} alt="" />
                    </div>
                </div>


                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading info-title">Why Choose Us</h2>
                        <p className="lead information">Choosing the right daycare is a significant decision for any family. At Susi's Daycare, we stand out by offering:
                            <ul className='mt-2 text-start'>
                                <li className='text'>Experienced and compassionate staff dedicated to your child’s well-being.</li>
                                <li>Safe and stimulating indoor and outdoor environments for play and learning.</li>
                                <li>A curriculum designed to promote social, emotional, cognitive, and physical development.</li>
                                <li>Regular communication with parents to ensure transparency and trust.
                                    Discover why families in the DFW choose Susi's Daycare for their child's early education journey."</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-5">
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                        <img src={woodset} alt="" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="container marketing">


                    <div className="row mt-5">
                        <h1 className='mb-5 meet-the-team'>Meet the Team</h1>
                        <div className="col-lg-12">
                            <img className='rounded-circle' width="140" height="140" src={susi} alt="" />
                            <h2 className='bio-h2'>Susi</h2>
                            <p className='bio'>Welcome to Susi's Daycare! With years of experience in both Montessori and elementary school settings, I bring a wealth of knowledge and passion to nurturing young minds. I am dedicated to creating a supportive environment where children can learn and grow through structured activities and creative play. My goal is to provide a safe and loving space for each child to flourish.</p>
                        </div>
                        {/* <div className="col-lg-6">
                            <img className='rounded-circle' width="140" height="140" src={santi} alt="" />
                            <h2 className='bio-h2'>Santi</h2>
                            <p className='bio'>Hello! I specialize in managing the administrative operations of the daycare, ensuring smooth and efficient daily functions. With a passion for organization and a dedication to creating a nurturing environment, I handle everything from scheduling and paperwork to parent communications, ensuring that every child receives the best care possible.</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </main>
    )
}