import './App.css';
import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import { TemaClaro, TemaEscuro} from './Temas';
import { GlobalLayout } from './GlobalStyle';
import Toogle from './Toogle';


class App extends Component {

  constructor(props) {
    super(props);  
    
    this.state = {
      TemaPagina: 'Tema Claro',
      Tema: 'Tema Claro'
    };
  }   

  OpcaoTema = () => {
    if(this.state.Tema === 'Tema Claro'){
        this.setState({
          TemaPagina: 'Tema Escuro',
          Tema: 'Tema Escuro'
        });
    }else{
        this.setState({
          TemaPagina: 'Tema Claro',
          Tema: 'Tema Claro'
        });
    }
  }

  render(){    
    return (
      <ThemeProvider theme={this.state.TemaPagina == 'Tema Claro' ? TemaClaro : TemaEscuro}>
        <GlobalLayout />
            <div id="principal">
                <div id="conteudo">
                    <div>
                        <Toogle themeLabel={this.state.Tema} toogleTheme={this.OpcaoTema} />
                    </div>      
                    <div>
                        <p id="texto"> Sign up to my newsletter </p>
                    </div>
                    <div>
                        <input type="text" defaultValue="jairomarotta@hotmail.com"/>
                        <button>Sign Up</button>              
                    </div>          
                </div>          
            </div>
      </ThemeProvider>
    )
  }
}

export default App;
