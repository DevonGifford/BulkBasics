
import React, { Fragment, useState } from 'react';

import { 
    FormContainer, 
    FormTitle, 
    Form, 
    FormInput, 
    FormInput2, 
    FormButton, 
    TwoOnALine,
    CheckboxContainer,
    CheckboxInput,
    CheckboxLabel,
    SignUpContainer,
    SignUpBoxes,
    SignUpBoxHeading,
    SignUpBoxText,
    SignUpBoxContent,
} from './form-shipping.styles';


interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  apartment?: string;
  city: string;
  postalCode: string;
  phone: string;
  saveForNextTime: boolean;
}

const defaultShippingDetails = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    phone: '',
    saveForNextTime: false,
}

const ShippingForm: React.FC = () => {
    const [shippingDetails, setShippingDetails] = useState(defaultShippingDetails);

    const resetShippingForm = () => {
        setShippingDetails(defaultShippingDetails)
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
    
        if (type === 'checkbox') {
          setShippingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: checked,
          }));
        } else {
          setShippingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
          }));
        }
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic, e.g., send data to the server
        // At the moment I do not need to collect any of the data
        console.log(shippingDetails);
        resetShippingForm();
      };
  
    return (
        <Fragment>

            <FormContainer>
                <FormTitle>Shipping Details</FormTitle>
                <Form onSubmit={handleSubmit}>

                    <TwoOnALine>

                        <FormInput2
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={shippingDetails.firstName}
                            onChange={handleChange}
                            required
                        />

                        <FormInput2
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={shippingDetails.lastName}
                            onChange={handleChange}
                            required
                        />

                    </TwoOnALine>
                
                    <FormInput
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={shippingDetails.email}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        type="text"
                        name="address"
                        placeholder="Street and House Number"
                        value={shippingDetails.address}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        type="text"
                        name="apartment"
                        placeholder="Apartment, suite, etc. (optional)"
                        value={shippingDetails.apartment}
                        onChange={handleChange}
                        required
                    />

                    <TwoOnALine>

                        <FormInput2
                            type="text"
                            name="city"
                            placeholder="City"
                            value={shippingDetails.city}
                            onChange={handleChange}
                            required
                        />

                        <FormInput2
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={shippingDetails.postalCode}
                            onChange={handleChange}
                            required
                        />

                    </TwoOnALine>

                    <FormInput
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        value={shippingDetails.phone}
                        onChange={handleChange}
                        required
                    />

                    {/* SAVE FOR LATER */}
                    <CheckboxContainer>
                    
                        <CheckboxInput
                            type="checkbox"
                            name="saveForNextTime"
                            checked={shippingDetails.saveForNextTime}
                            onChange={handleChange}
                        />
                    
                        <CheckboxLabel>
                            Save for Next Time
                        </CheckboxLabel>

                    </CheckboxContainer>

                    <FormButton type="submit">Submit</FormButton>

                </Form>

            </FormContainer>

            <SignUpBoxes>

                {/* SIGN-UP FOR MARKETING */}
                <SignUpContainer>
                    <CheckboxContainer>
                        
                        <CheckboxInput
                            type="checkbox"
                            name="SMS Tracking"
                            
                        />

                    </CheckboxContainer>

                    <SignUpBoxText>
                        
                        <SignUpBoxHeading>
                        Sign up for exclusive offers
                        </SignUpBoxHeading>

                        <SignUpBoxContent>
                        Get special offers, new releases, and more from Bulk Basics!
                        <br/>
                        By checking this box, you agree to receive recurring automated promotional and personalized marketing messages. 
                        <br/>
                        View Terms&Privacy.
                        </SignUpBoxContent>

                    </SignUpBoxText>


                        
                </SignUpContainer>

                {/* SIGN-UP FOR SMS TRACKING */}
                <SignUpContainer>
                    <CheckboxContainer>
                        
                        <CheckboxInput
                            type="checkbox"
                            name="SMS Tracking"
                            
                        />

                    </CheckboxContainer>

                    <SignUpBoxText>
                        
                        <SignUpBoxHeading>
                            Get SMS alerts about your order
                        </SignUpBoxHeading>

                        <SignUpBoxContent>
                            Stay informed of your purchase with order confirmation, shipping confirmation, and product information messages.
                        </SignUpBoxContent>

                    </SignUpBoxText>


                        
                </SignUpContainer>

            </SignUpBoxes>

        </Fragment>

      
    );
  };
  
  export default ShippingForm;