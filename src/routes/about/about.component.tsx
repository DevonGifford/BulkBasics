import React, { Fragment } from 'react'

import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import { 
    SiFirebase, 
    SiRedux, 
    SiReduxsaga, 
    SiJavascript,
    SiTypescript,
    SiHtml5, 
    SiCss3,
    SiStyledcomponents,
    SiVite,
    SiReact,
    SiReactrouter,
    SiStripe,
    SiJest,
    SiGithub,
    SiLinkedin,
    SiTwitter,
    SiDiscord,
    SiInstagram,
    SiFacebook,
} from 'react-icons/si';

import { FiMail } from "react-icons/fi"
import { TbWorldWww } from "react-icons/tb"

import { 
    AboutMeContainer,  
    AboutProjectContainer, 
    BigHeading, 
    BiggestHeading, 
    ButtonContainer, 
    FooterContainer, 
    HeadingSplash, 
    IconContainer, 
    ImageContainer, 
    LinksContainer, 
    MailEmailContainer, 
    PersonalEmail, 
    PersonalWebsite, 
    SmallHeading,
    StyledIcon,
    StyledWebandMailIcon,
    TextSection
} from './about.styles'

const About = () => {
  return (
    <Fragment>
        
        <HeadingSplash>
            <BiggestHeading>
                Hello there... 
            </BiggestHeading>
            <SmallHeading> 
                Sorry but this is not a real online shop
                <br/>
                😅
            </SmallHeading>
            <br/>
            <BiggestHeading>This is a Portfolio Project</BiggestHeading>
        </HeadingSplash>

        <AboutProjectContainer>

            <BigHeading>About this project</BigHeading>
            
            <br/>

            <TextSection>
                {/* This website is designed to showcase my portfolio and demonstrate my skills in web development. It is not a real website, but a practice project to improve my abilities.
                It's fully functional however some links will take you here and none of the products are real */}
                This project serves as a personal learning experience, allowing me to test my abilities in seeing a project through from start to finish. Rather than replicating existing stores, the focus is on developing robust business logic and integrating various technologies.
                <br/><br/>
                My goal was to fully immerse myself in building an ecommerce application, exploring different topics and honing my implementation and integration skills. While efficiency could have been prioritized, the main objective was to gain comprehensive knowledge.
                <br/><br/>
                This project doesn't aim to create a real store with actual products. Instead, the focus is on building business logic and refining development skills, simulating real-world scenarios and mirroring professional work environments
            </TextSection>
            
            <SmallHeading>Technologies Used</SmallHeading>

            <IconContainer>
                <div>
                    <StyledIcon>
                        <SiTypescript/>
                    </StyledIcon>
                    TypeScript
                </div>

                <div>
                    <StyledIcon>
                        <SiJavascript/>
                    </StyledIcon>
                    JavaScript
                </div>

                <div>
                    <StyledIcon>
                        <SiVite/>
                    </StyledIcon>
                    Vite
                </div>

                <div>
                    <StyledIcon>
                        <SiReact/>
                    </StyledIcon>
                    React.js
                </div>


                <div>
                    <StyledIcon>
                        <SiFirebase/>
                    </StyledIcon>
                    FireBase
                </div>

                <div>
                    <StyledIcon>
                        <SiRedux/>
                    </StyledIcon>
                    Redux
                </div>

                <div>
                    <StyledIcon>
                        <SiReduxsaga/>
                    </StyledIcon>
                    Redux Saga
                </div>


                <div>
                    <StyledIcon>
                        <SiReactrouter/>
                    </StyledIcon>
                    React Router
                </div>

                <div>
                    <StyledIcon>
                        <SiStripe/>
                    </StyledIcon>
                    Stripe API
                </div>

                <div>
                    <StyledIcon>
                        <SiJest/>
                    </StyledIcon>
                    Jest Testing
                </div>

                <div>
                    <StyledIcon>
                        <SiHtml5/>
                    </StyledIcon>
                    HTML5 
                </div>

                <div>
                    <StyledIcon>
                        <SiStyledcomponents/>
                    </StyledIcon>
                    Styled-C
                </div>

                <div>
                    <StyledIcon>
                        <SiCss3/>
                    </StyledIcon>
                    CSS3
                </div>
            </IconContainer>

        
            <ButtonContainer>  

                <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                type='button'
                >
                how I built this
                </Button>

                <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                type='button'
                >
                Source Code
                </Button>

            </ButtonContainer>

       
        </AboutProjectContainer>


        <AboutMeContainer>

            <BigHeading>About me</BigHeading>

            <ImageContainer src="https://media.licdn.com/dms/image/D4E03AQEUZpd3TiEITQ/profile-displayphoto-shrink_800_800/0/1682698436823?e=1691625600&v=beta&t=6joJA9FA5yXO6XjNSCbgDgBob8tZ2aPXGj0JG1r2Uqw" alt="Profile Picture" />
            
            <LinksContainer>
              
                <TextSection>
                Hello! I'm Devon Gifford, a dedicated full stack developer experienced in front and back end development. I'm passionate about learning and problem-solving, specializing in creating user-friendly web applications using React and its ecosystem.
                <br/><br/>
                My journey into web development began while creating websites for freelance marketing clients in South Africa. This sparked my fascination with the field, leading me to explore QA at a major FAANG company in Europe, where I further refined my problem-solving skills.
                <br/><br/>
                In addition to my start-up experience, I hold a Bachelor's degree in Business Administration. As a self-taught programmer, I have invested time and effort into mastering React and staying current with industry trends.
                <br/><br/>
                I'm excited to tackle new challenges, collaborate with passionate teams, and deliver innovative solutions. Let's connect and create something impactful together!
                </TextSection>

                <MailEmailContainer>

                    <PersonalWebsite>
                        <SmallHeading>Personal Website</SmallHeading>
                        <div>
                            <a 
                              href="" 
                              target='_blank'
                            >
                                <StyledWebandMailIcon>
                                    <TbWorldWww/>
                                </StyledWebandMailIcon>
                            </a>
                        </div>
                        <TextSection>For more information about me and my portfolio of work, please visit my personal website.
                        </TextSection>
                    </PersonalWebsite>

                    <PersonalEmail>
                        <SmallHeading>Send me an Email</SmallHeading>
                        <div>
                            <a 
                              href="mailto:devongifford@outlook.com" 
                              target='_blank'
                              rel="noreferrer"
                            >
                                <StyledWebandMailIcon> 
                                    <FiMail/>
                                </StyledWebandMailIcon>
                            </a>
                        </div>
                        <TextSection> You can send me an email if you have any questions or want to get in contact.  I'll try my best to get back to you.
                        </TextSection>
                    </PersonalEmail>

                </MailEmailContainer>
            
                <br />
                
                <SmallHeading> Social Media Links</SmallHeading>
                <IconContainer>

                    <div>
                        <a 
                            href="https://www.linkedin.com/in/dbgifford/" 
                            target='_blank'
                            rel="noreferrer"
                        >
                            <StyledIcon>
                                <SiLinkedin/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a 
                          href="https://github.com/DevonGifford" 
                          target='_blank'
                          rel="noreferrer"
                        >
                        <StyledIcon>
                            <SiGithub/>
                        </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a 
                            href="https://twitter.com/devon_gifford" 
                            target='_blank'
                            rel="noreferrer"
                        >
                            <StyledIcon>
                                <SiTwitter/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a href="https://discordapp.com/users/DevonGifford#7738" target='_blank' rel="noreferrer">
                            <StyledIcon>
                                <SiDiscord/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/princedevon_za/" target='_blank' rel="noreferrer">
                            <StyledIcon>
                                <SiInstagram/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/GiffordDevon/" target='_blank' rel="noreferrer">
                            <StyledIcon>
                                <SiFacebook/>
                            </StyledIcon>
                        </a>
                    </div>

                </IconContainer>


            </LinksContainer>

            
        </AboutMeContainer>
           
           
        <FooterContainer>
            <TextSection>
                Built from scratch by <br/> Devon Gifford
            </TextSection>
            <TextSection>
                 2023 Portfolio Project. <br/>All rights reserved.
            </TextSection>
        </FooterContainer>


    </Fragment>
  )
}

export default About