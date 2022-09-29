import { Link } from 'react-router-dom'

import Navbar from './Navbar'



export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  cont1'>
                <h1 className='head1'>ZOMATO</h1>
                <h2 className='head2'>Discover the best food and drinks in Ludhiana</h2>
                <div className=' col-lg-8  col-lg-offset-2 cont2'>
                    <input className='form-control' type={'text'} name='name' placeholder='Search for restaurant,cusine or a dish'></input>
                    <span className='glyphicon glyphicon-search pull-right'></span>
                </div>
            </div>


            <div className='col-lg-10 col-lg-offset-1  col-md-10 col-md-offset-1  col-sm-10 col-sm-offset-1  col-xs-10 col-xs-offset-1 hh'>
                <div className='col-lg-12 col-md-12  col-sm-12  col-xs-12'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 cont3'>
                        <div className='panel panel-default panel1'>
                            <div className='panel-header header1'>

                            </div>
                            <div className='panel-body body1'>
                                <Link to="/Orderonline">  <h2 className='head3'>Order Online</h2></Link>
                                <div className='para1'>
                                    <p>Stay Home And To Your Doorstep <span className='glyphicon glyphicon-menu-right gly2'></span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 cont4'>
                        <div className='panel panel-default panel2'>
                            <div className='panel-header header2'>

                            </div>
                            <div className='panel-body body2'>
                                <Link to =""><h2 className='head4'>Dinning</h2></Link>
                                <div className='para2'>
                                    <p> View The City's Favourite Dinning Venues <span className='glyphicon glyphicon-menu-right gly3'></span></p>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-lg-10 col-lg-offset-1  col-md-10 col-md-offset-1  col-sm-10 col-sm-offset-1  col-xs-10 col-xs-offset-1 best'>
                <div className='col-lg-12  col-md-12   col-sm-12   col-xs-12'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 '>
                        <div className='col-lg-12  col-md-12   col-sm-12   col-xs-12 cont5 '>

                            <h1 className='collection1'>Best Of Ludhiana</h1>
                            <p className='collection2'>11 places<span className='glyphicon glyphicon-menu-right gly2'></span></p>

                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 '>
                        <div className='col-lg-12 col-md-12   col-sm-12   col-xs-12 cont6'>
                            <h1 className='collection1'>Trending This week</h1>
                            <p className='collection2'>30 places<span className='glyphicon glyphicon-menu-right gly2'></span></p>
                        </div>
                    </div>




                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 '>
                        <div className='col-lg-12  col-md-12   col-sm-12   col-xs-12 cont7'>
                            <h1 className='collection1'>Butter Chicken</h1>
                            <p className='collection2'>12 places<span className='glyphicon glyphicon-menu-right gly2'></span></p>
                        </div>
                    </div>


                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                        <div className='col-lg-12  col-md-12   col-sm-12   col-xs-12 cont8'>
                            <h1 className='collection1'>Best Street Food</h1>
                            <p className='collection2'>6 places<span className='glyphicon glyphicon-menu-right gly2'></span></p>
                        </div>
                    </div>


                </div>
            </div>


            <div className='col-lg-10 col-lg-offset-1  '>

                <div className='col-lg-12 cont9'>

                    <h1> Popular Localties In And Around Ludhiana</h1>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont10'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>Sarabha Nagar</h4>
                            <span className='cit2'>6 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>



                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>Civil Lines</h4>
                            <span className='cit2'>314 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>Gurdev Nagar</h4>
                            <span className='cit2'>193 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>Model Town</h4>
                            <span className='cit2'>208 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>BRS Nagar</h4>
                            <span className='cit2'>80 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>Rajguru Nagar</h4>
                            <span className='cit2'>102 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>Dugri</h4>
                            <span className='cit2'>219 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>PAU</h4>
                            <span className='cit2'>220 places<span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 cont13'>
                        <div className='col-lg-12 cont11'>
                            <h4 className='city1'>See More</h4>
                            <span className='cit2'><span className='glyphicon glyphicon-menu-right gly2'></span></span>
                        </div>
                    </div>


                </div>
            </div>



            <div className='col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1'>
                <div className='col-lg-12  col-md-12 col-sm-12 col-xs-12    cont14'>
                    <h2 className='trust'>Trusted By 200+ Restaurant</h2>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 cont15'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 cont16'>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 cont15'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 cont17'>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 cont15'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 cont18'>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 cont15'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 cont19'>
                        </div>
                    </div>

                </div>
            </div>

            <div className='col-lg-10 col-lg-offset-1 col-xs-10 col-xs-offset-1'>
                <div className='col-lg-12  col-xs-12 cont20'>
                    <div className='col-lg-5 col-xs-12 cont21'>
                        <div className='col-lg-12 col-xs-12 '>
                        </div>
                    </div>

                    <div className='col-lg-6 col-xs-12 cont23'>
                        <div className='col-lg-12  col-xs-12 cont24'>
                            <span className='glyphicon glyphicon-star gly2'></span>
                            <span className='glyphicon glyphicon-star gly2'></span>
                            <span className='glyphicon glyphicon-star gly2'></span>
                            <span className='glyphicon glyphicon-star gly2'></span>
                            <h5 className='fan'>Our Fans' Favourite</h5>
                            <h1 className='pasta'>Pasta  Carbonara The Ultimate Comfort </h1>
                            <p className='pastapara'> Fantastic food! It was very fresh and flavorful. We could tell it was just made for us. A little slow, but worth the wait. Yum!I have eaten at pasta many times now & keep going back because it is FABULOUS! The food is delicious, fresh and so affordable! With their free Wi Fi it is also a very nice alternative to Starbucks
                            </p>
                            <div className='btn-group'>
                                <button type="button" className='btn btn-danger'>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col-lg-12 col-xs-12 cont25' style={{border:'2px solid grey'}}>
                <div className='col-lg-10 col-lg-offset-1 col-xs-10 col-xs-offset-1'>
                    <h1>ZOMATO</h1>


                    <div className='col-lg-12 cont26'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 cont27'>
                            <div className='col-lg-12 flex'>
                                <h4 className='footer1'>ABOUT ZOMATO</h4>
                                <p className='footer2'>Who We Are</p>
                                <p className='footer2'>Blog</p>
                                <p className='footer2'>Work With Us</p>
                                <p className='footer2'>Investor Relations</p>
                                <p className='footer2'>Report Fraud</p>
                                <p className='footer2'>Contact Us</p>
                            </div>
                        </div>


                        <div className='col-lg-3 col-xs-12 cont27'>
                            <div className='col-lg-12 flex'>
                                <h4 className='footer1'>Zomaverse</h4>
                                <p className='footer2'>Zomato</p>
                                <p className='footer2'>Feeding India</p>
                                <p className='footer2'>Hyperpure</p>
                                <p className='footer2'>Zomaland</p>
                            </div>
                        </div>

                        <div className='col-lg-3 col-xs-12 cont27'>
                            <div className='col-lg-12 flex'>
                                <h4 className='footer1'>For Restraunts</h4>
                                <p className='footer2'>Partner With Us</p>
                                <p className='footer2'>Apply For You</p>
                                <p className='footer2'>For Enterprises</p>
                                <p className='footer2'>Zomato For Work</p>



                                <h3 className='social'>Social Link</h3>
                                <div className='social-icons'>
                                    <i className="fab fa-twitter twitter"></i>
                                    <i className="fa-brands fa-instagram insta"></i>
                                    <i className="fa-brands fa-facebook fb"></i>
                                    <i className="fa-brands fa-linkedin linkedin"></i>
                                    <i className="fa-brands fa-youtube youtube"></i>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3 col-xs-12 cont27'>
                            <div className='col-lg-12 flex'>
                                <h4 className='footer1'>Learn More</h4>
                                <p className='footer2'>Privacy</p>
                                <p className='footer2'>Security</p>
                                <p className='footer2'>Terms</p>
                                <p className='footer2'>Sitemap</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
       </div>
    )
}