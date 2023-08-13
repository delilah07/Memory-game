import './SingleCard.css';

const SingleCards = ({ card, handleChoise, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoise(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
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
