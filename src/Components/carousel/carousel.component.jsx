import React, { useCallback } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
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



export const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev()
  // }, [emblaApi])

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext()
  // }, [emblaApi])

  return (
    <Embla >

      <EmblaViewPort ref={emblaRef} >

        <EmblaContainer>
          {slides.map((index) => (

            <EmblaSlide  key={index}>


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

        {/* <button onClick={scrollPrev}>
          Prev
          </button>
          <button onClick={scrollNext}>
          Next
        </button> */}

      </EmblaViewPort>

    </Embla>
  )
}