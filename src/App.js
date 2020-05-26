import React,{Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Bild from './Bilder/man.jpg'
import Guesses from './Components/Guesses'
import Knapp from './Components/Knapp'
import ContainerBTN from './Components/ContainerBTN'
import MyBTN from './Components/ButtonRender'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      Loaded : true,
      alfabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
      ,'s','u','v','w','x','y','z','å','ä','ö'],
      element: '',
      word: ['Jul', 'Ti', 'Sofia', 'Ulrika'],
      newWord : '',
      number: 0
    };
  }

  createNewWord = () => {
      const index = Math.floor(Math.random() * this.state.word.length);
      const choosenWord = this.state.word[index];
  
      const arrayOfLetters = choosenWord.split('').map(element =>{
        return element;
      })
      const result = arrayOfLetters.map(()=>{
        return '_ ';
      })
      this.setState({
        newWord: result
      });
  }

  changeColor = (event) => {

      event.target.style.backgroundColor = '#bdbdbd';
      const newCount = Number(this.state.number) + 1;
      this.setState({
        number : newCount
      });
  }

  changeColorOffAllBTN = () => {
    let test = this.state.element.filter(element =>{
      return element.backgroundColor === '#bdbdbd';
    })
    test = test.map(element =>{
      return element.backgroundColor ='#ffc107';
    })
    this.createNewWord()

    this.setState({
      Loaded: true,
      element : test,
      number : 0
    });
  }

  createButtonsOfLetters  = () => {
    const array = this.state.alfabet.map((i, index) => 
      {
          return <Knapp Letter={i} change={this.changeColor.bind(this)} key={index}></Knapp>
      });

    this.setState({
      element : array
    });
  }
  
  restartGame = () => {
    alert("Enought guesse , try again!");
    this.changeColorOffAllBTN();
  }

  render()
  {
    if(this.state.Loaded)
    {
      this.createButtonsOfLetters();
      this.createNewWord();
      this.setState({
        Loaded: false
      });
    }

    if(this.state.number === 15){
      {this.restartGame()}
    }

    return (
        <div className="App">
        <Header></Header>
        <img id="hangedMan" src={Bild} alt="Man"></img>
        <Guesses word={this.state.newWord} guess={this.state.number}></Guesses>
        <ContainerBTN knappar={this.state.element}></ContainerBTN>
        <MyBTN changeColor={this.changeColorOffAllBTN.bind(this)}></MyBTN>
        </div>
      );
  }
}

export default App;
