import React, { Fragment } from "react"

import { useNavigate } from 'react-router-dom'

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { FiMail } from "react-icons/fi"
import { TbWorldWww } from "react-icons/tb"

import { 
    FooterContainer, 
    BigFooter,
    ColumnSection1,
    ColumnSection2,
    ColumnSection3,
    ColumnSection4,
    ColumnSectionBig,
    ColumnHeading,
    ColumnEntry, 
    ImageSection, 
    ImageContainer,
    SmallFooter,
} from "./footer.styles";

const Footer = () => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate('/about');

  return (
    <Fragment>
        <FooterContainer>

            <BigFooter> 

                {/* Column 1  */}
                <ColumnSection1>
                    {/* ABOUT US */}
                    <ColumnHeading>ABOUT US</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Our Story </li>
                            <li>Elite Membership </li>
                            <li>Elite Benefits </li>
                            <li>BulkBasics Ambassador </li>
                        </ul>
                    </ColumnEntry>
                    
                    {/* SHOPPING */}
                    <ColumnHeading>SHOPPING</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Retail Store </li>
                            <li>Gift Cards </li>
                            <li>Brands </li>
                            <li>Gift Registery </li>
                        </ul>
                    </ColumnEntry>

                </ColumnSection1>


                {/* Column 2  */}
                <ColumnSection2>
                    {/* CUSTOMER SERVICES */}
                    <ColumnHeading>CUSTOMER SERVICES</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Custom Quotes </li>
                            <li>Checkout FAQ </li>
                            <li>Track Your Order </li>
                            <li>Returns & Cancellations </li>
                            <li>Shopping </li>
                            <li>Product Policies </li>
                            <li>Warranty Information </li>
                            <li>Suggestion Box </li>
                            <li>Report Website Issues </li>
                            <li>Customer Survey </li>
                        </ul>
                    </ColumnEntry>

                </ColumnSection2>


                {/* Column 3  */}
                <ColumnSection3>
                    {/* POLICIES & NOTICES */}
                    <ColumnHeading>POLICIES & NOTICES</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Recall Information </li>
                            <li>Privacy Policy </li>
                            <li>Terms of Use </li>
                            <li>Accessibility </li>
                            <li>Covid-19 </li>
                        </ul>
                    </ColumnEntry>

                    {/* OTHER INFO */}
                    <ColumnHeading>OTHER INFO</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Affiliates </li>
                            <li>Roque Financing </li>
                            <li>Contract Info </li>
                            <li>Distribution </li>
                        </ul>
                    </ColumnEntry>

                </ColumnSection3>


                {/* Column 4  */}
                <ColumnSection4>
                    {/* REAL WEBSITES  */}
                    {/* <ColumnHeading>OTHER WEBSITES</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Rogue Fitness </li>
                            <li>Barbell Apparel </li>
                            <li>GymShark </li>
                            <li>MyProtein </li>
                            <li>HSN Store </li>
                        </ul>
                    </ColumnEntry> */}

                    {/* CONTACT US */}
                    <ColumnHeading>CONTACT US</ColumnHeading>
                    <ColumnEntry>
                        <p><strong>Customer Care:</strong><br/>123-456-789 </p>
                        <p><strong>Business Number:</strong><br/>123-456-789 </p>
                        <p><strong>Fax:</strong><br/>987-654-321 </p>
                        <br/>
                        <p><strong>Bulk Basics HQ</strong></p>
                        <p>123 4th Ave.</p>
                        <p>Earth, 9876</p>
                    </ColumnEntry>

                </ColumnSection4>


                {/* Column 5 BIG */}
                <ColumnSectionBig>
                    {/* CONNECT WITH US */}
                    <ColumnHeading>CONNECT WITH ME </ColumnHeading>

                    <p>Devon Gifford</p>


                    {/* SOCIAL MEDIA */}
                    <ColumnHeading><br/> SOCIAL MEDIA</ColumnHeading>
                    <ImageSection>

                        {/* Github Icon */}
                        <a 
                            href="https://github.com/DevonGifford" 
                            target='_blank'
                            >
                            <ImageContainer>
                                <SiGithub />
                            </ImageContainer>
                        </a>
                        
                        {/* LinkedIn Icon */}
                        <a href="https://www.linkedin.com/in/dbgifford/" target='_blank'>
                            <ImageContainer>
                                <BsLinkedin />
                            </ImageContainer>
                        </a>
                        

                        {/* Instagram Icon */}
                        <a href="https://www.instagram.com/princedevon_za/" target='_blank'>
                            <ImageContainer>
                                <TiSocialInstagram />
                            </ImageContainer>                
                        </a>

                        {/* Twitter Icon */}
                        <a href="https://twitter.com/devon_gifford" target='_blank'>
                            <ImageContainer>
                                <TiSocialTwitter />
                            </ImageContainer>
                        </a>

                    </ImageSection>


                    <ColumnHeading>PORTFOLIO WEBSITE</ColumnHeading>
                    <ImageSection>

                        {/* Email */}
                        <a 
                            href="" 
                            target='_blank'
                            >
                            <ImageContainer>
                                <TbWorldWww />
                            </ImageContainer>

                        </a>
                    </ImageSection>

                    
                    <ColumnHeading>GET IN TOUCH</ColumnHeading>
                    <ImageSection>

                        {/* Email */}
                        <a 
                            href="mailto:devongifford@outlook.com" 
                            target='_blank'
                            >
                            <ImageContainer>
                                <FiMail />
                            </ImageContainer>

                        </a>

                    </ImageSection>



                </ColumnSectionBig>

            </BigFooter>



            <SmallFooter>
                <h5>2023 Portfolio Project. All rights reserved. </h5>
            </SmallFooter>

        </FooterContainer>


    </Fragment>
  )
}

export default Footer