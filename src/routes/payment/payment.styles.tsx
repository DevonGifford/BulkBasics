import styled, { css } from 'styled-components';

/*-----------------------------------------------
    Overall
-----------------------------------------------*/ 
export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;


export const PaymentWrapper = styled.div<{ menuVisible: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100dvh;

  ${({ menuVisible }) =>
    !menuVisible &&
    css`
      flex-grow: 0;
    `};

  @media (max-width: 1450px) {
    display: flex;
    flex-direction: column-reverse;
    flex-grow: ${({ menuVisible }) => (menuVisible ? 1 : 0)};
    min-height: 100%;
  }
`;


/*-----------------------------------------------
    DropDown Stuff
-----------------------------------------------*/
export const DropdownButton = styled.button`
  font-family: Audiowide;
  font-size: calc(10px + 1vw);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  color: #174c12;
  background-color: #99be7897;
  letter-spacing: 2.5px;
  padding-top: 10px;
  padding-bottom: 10px;
    

  cursor: pointer;

  &:hover + & {
    color: blue;
  }
`;

/*-----------------------------------------------
    LEFT SIDE (a.k.a BOTTOM)
-----------------------------------------------*/ 
export const LeftSide = styled.div`
  background-color: #8cba643b;
`;



/*-----------------------------------------------
    RIGHT SIDE (aka. TOP SIDE)
-----------------------------------------------*/ 
export const RightSide = styled.div`
  background-color: #99be7897;
`;

export const RightSideConetent = styled.div`
  display: flex;
  flex-direction: column;
`;


/*    order summary
-----------------------------------------------*/ 
export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: large;
  padding: 60px 40px 40px 40px;
    
`;


export const RightSideHeading = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: Audiowide;
  color: #174c12;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 2.5px;

  text-decoration: underline dotted #174c12; 
`;

export const OrderSummaryHeading = styled.div`
  display: flex;
  justify-content: center;
`;


export const OrderSummarySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DottedLine = styled.div`
  border-top: 1px dotted #00000069;
  margin-top: 10px;
  padding-bottom: 3px;
`;

export const OrderSummaryText = styled.div`
  justify-content: flex-start;

  text-transform: uppercase;
  font-family: Fira Code;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1px;

  padding-bottom: 10px;
`;

export const OrderSummaryAmount = styled.div`
  display: flex;
  justify-content: flex-end;

  text-transform: uppercase;
  font-family: Fira Code;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1px;
`;

export const OrderSummaryTextTotal = styled.div`
  justify-content: flex-start;

  text-transform: uppercase;
  font-family: Fira Code;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 1px;
`;

export const OrderSummaryAmountTotal = styled.div`
  display: flex;
  justify-content: flex-end;

  text-transform: uppercase;
  font-family: Fira Code;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 1px;
`;




/*-----------------------------------------------
    FOOTER
-----------------------------------------------*/ 
export const FooterContainer = styled.div`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`;