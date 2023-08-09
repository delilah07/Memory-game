import { useEffect, useState } from 'react';
import './App.css';
import SingleCards from './components/SingleCard/SingleCards';

const cardImgs = [
  { src: './img/helmet-1.png', match: false },
  { src: './img/potion-1.png', match: false },
  { src: './img/ring-1.png', match: false },
  { src: './img/scroll-1.png', match: false },
  { src: './img/shield-1.png', match: false },
  { src: './img/sword-1.png', match: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImgs, ...cardImgs]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  };

  // handle a choise

  const handleChoise = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  };

  // compare two cards
  useEffect(() => {
    if (choiseOne && choiseTwo) {
      if (choiseOne.src === choiseTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === choiseOne.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          })
        );
        choiseOne.match = true;
        choiseTwo.match = true;
        resetTurn();
      } else {
        console.log('not same');
        resetTurn();
      }
    }
  }, [choiseOne, choiseTwo]);

  // reset choises and increase turn
  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns((prevTurn) => prevTurn++);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCards key={card.id} card={card} handleChoise={handleChoise} />
        ))}
      </div>
    </div>
  );
}

export default App;
