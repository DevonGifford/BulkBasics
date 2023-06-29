import { ReactNode } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

import Autoplay from 'embla-carousel-autoplay';
import imageByIndex from './imagebyindex';


import { 
  Embla, 
  EmblaViewPort, 
  EmblaContainer, 
  EmblaSlide, 
  EmblaSlideOverlay,
  EmblaSlideOverlay2,
  EmblaSlideImage,
} from './carousel.styles'


type PropType = {
  options?: EmblaOptionsType
  slides: ReactNode[]
}

export const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <Embla >

      <EmblaViewPort ref={emblaRef} >

        <EmblaContainer>
          {slides.map((slide, index) => (

            <EmblaSlide key={index}>


              <EmblaSlideImage
                src={imageByIndex(index)}
                alt="scrolling image"
              >
              </EmblaSlideImage>


              <EmblaSlideOverlay>
                UNLOCK YOUR POTENTIAL 
              </EmblaSlideOverlay>

              <EmblaSlideOverlay2>
                ESSENTIALS MEN'S COLLECTION
              </EmblaSlideOverlay2>

            </EmblaSlide>
            
            ))}
        </EmblaContainer>

      </EmblaViewPort>

    </Embla>
  )
}