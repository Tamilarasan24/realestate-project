import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"

const Contact = ()=>{
    return(
       <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
               <span className="orangeText">Our Contacts</span>
               <span className="primaryText">Easy to Contact Us</span>
               <span className="secondaryText">We always ready to help by providing best service</span>
            
            <div className="flexColStart contactModes">
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Call</span>
                                <span className="secondaryText">1234 4567 654</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call now</div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Chat</span>
                                <span className="secondaryText">1234 4567 654</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat now</div>
                    </div>
                </div>
            </div>
            
            {/* ------ */}
                         
            <div  className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Video</span>
                                <span className="secondaryText">1234 4567 654</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Videocall now</div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Message</span>
                                <span className="secondaryText">1234 4567 654</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message now</div>
                    </div>
                </div>
            </div>
            <div className="c-right">
       <div className="image-container">
        <img src="./contact.jpg" alt=""/>
       </div>
            </div>
            </div> 
       </section>
    )
}

export default Contact;