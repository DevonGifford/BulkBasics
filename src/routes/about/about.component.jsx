import React, { Fragment } from 'react'

import Button, { BUTTON_TYPE_CLASSES } from '../../Components/button/button.component';

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
    AboutMeContent, 
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
                This website is designed to showcase my portfolio and demonstrate my skills in web development. It is not a real website, but a practice project to improve my abilities.
                It's fully functional however some links will take you here and none of the products are real
            </TextSection>
            
            <SmallHeading>Technologies Used</SmallHeading>

            <IconContainer>
                <div>
                    <StyledIcon>
                        <SiHtml5/>
                    </StyledIcon>
                    HTML5 
                </div>

                <div>
                    <StyledIcon>
                        <SiCss3/>
                    </StyledIcon>
                    CSS3

                </div>

                <div>
                    <StyledIcon>
                        <SiJavascript/>
                    </StyledIcon>
                    JavaScript
                </div>

                <div>
                    <StyledIcon>
                        <SiTypescript/>
                    </StyledIcon>
                    TypeScript
                </div>

                <div>
                    <StyledIcon>
                        <SiReact/>
                    </StyledIcon>
                    React.js
                </div>

                <div>
                    <StyledIcon>
                        <SiStyledcomponents/>
                    </StyledIcon>
                    Styled Components
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
                        <SiVite/>
                    </StyledIcon>
                    Vite
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

            </IconContainer>

        
            <ButtonContainer>  

                <Button
                buttonType={BUTTON_TYPE_CLASSES.google}
                type='button'
                >
                how I built this
                </Button>

                <Button
                buttonType={BUTTON_TYPE_CLASSES.google}
                type='button'
                >
                Source Code
                </Button>

            </ButtonContainer>

       
        </AboutProjectContainer>


        <AboutMeContainer>

            <BigHeading>About me</BigHeading>

            
             
                <ImageContainer src="https://media.licdn.com/dms/image/D4E03AQEUZpd3TiEITQ/profile-displayphoto-shrink_800_800/0/1682698436823?e=1691625600&v=beta&t=6joJA9FA5yXO6XjNSCbgDgBob8tZ2aPXGj0JG1r2Uqw" alt="Profile Picture">
                </ImageContainer>
             
                

            
            
            <LinksContainer>
              
                <TextSection>
                    Hello! My name is Devon Gifford and I am a full stack developer with a passion for learning and problem solving. I have a strong foundation in front and back end development, and I am skilled in creating user-friendly and responsive web applications using React and its ecosystem.
                    <br/>
                    <br/>
                    My interest in web development started when I was creating websites for my freelance marketing clients in South Africa. Since then, after moving to Europe, I had an opportunity to work in QA for one of the major FAANG companies, where I realized my passion for problem-solving.  
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
                        <SmallHeading>You can also email me here</SmallHeading>
                        <div>
                            <a 
                              href="mailto:devongifford@outlook.com" 
                              target='_blank'
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
                        <a href="https://www.linkedin.com/in/dbgifford/" target='_blank'>
                            <StyledIcon>
                                <SiLinkedin/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a 
                          href="https://github.com/DevonGifford" 
                          target='_blank'
                        >
                        <StyledIcon>
                            <SiGithub/>
                        </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a href="https://twitter.com/devon_gifford" target='_blank'>
                            <StyledIcon>
                                <SiTwitter/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a href="https://discordapp.com/users/DevonGifford#7738" target='_blank'>
                            <StyledIcon>
                                <SiDiscord/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/princedevon_za/" target='_blank'>
                            <StyledIcon>
                                <SiInstagram/>
                            </StyledIcon>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/GiffordDevon/" target='_blank'>
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
                Built from scratch by Devon Gifford
            </TextSection>
            <TextSection>
                 2023 Portfolio Project. All rights reserved.
            </TextSection>
        </FooterContainer>


    </Fragment>
  )
}

export default About