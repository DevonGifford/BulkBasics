import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		//font-family: 'Open Sans Condensed';
		padding: 20px 40px;
        margin: 0;
        font-family: 'Open Sans Condensed', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;


		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-family: 'Audiowide', cursive;
    font-family: 'Fira Code', monospace;
    font-family: 'Inter', sans-serif;
    }

	a {
		text-decoration: none;
		color: black;
	}
	
    * {
		box-sizing: border-box;
	}
    
    html, body { 
    height: 100%; 
    width: 100%;
    margin: 0;
    padding: 0;
} 
`;
