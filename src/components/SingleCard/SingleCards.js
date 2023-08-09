import './SingleCard.css';

const SingleCards = ({ card, handleChoise }) => {
  const handleClick = () => {
    handleChoise(card);
  };
  return (
    <div className="card">
      <div>
        <img className="card-front" src={card.src} alt="card front" />
        <img
          onClick={handleClick}
          className="card-back"
          src="./img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCards;
