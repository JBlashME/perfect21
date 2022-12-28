
const BorderCardFigureConditions = ({ number, flip }) => {
    
  if (flip) {
    return (
      <p>
        {number === 11 ? "J" : number === 12 ? "Q" : number === 13 ? "K" : number}
      </p>
    );
  }
  return (
    <p className="rotate-flip">
      {number === 11 ? "J" : number === 12 ? "Q" : number === 13 ? "K" : number}
    </p>
  );
  
  
  };
  // 
  export default BorderCardFigureConditions;