import './SingleCard.css';

const SingleCards = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="card-front" src={card.src} alt="card front" />
        <img className="card-back" src="./img/cover.png" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCards;
