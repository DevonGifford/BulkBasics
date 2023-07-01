import React, { Fragment } from 'react'

import { 
  LeftSideContent,
  ShippingInformation,
  LogInDetails, 
} from './left.styles'

import ShippingForm from '../../form-shipping/form-shipping.component'
import SignInForm from '../../sign-in-form/sign-in-form.component'

const LeftTop = () => {
  return (
    <Fragment>
      
      <LeftSideContent>

        <ShippingInformation>

            <ShippingForm />

        </ShippingInformation>

        <br/><br/><br/><br/>

        <LogInDetails>
            
            <SignInForm />

        </LogInDetails>


        </LeftSideContent>


    </Fragment>
  )
}

export default LeftTop