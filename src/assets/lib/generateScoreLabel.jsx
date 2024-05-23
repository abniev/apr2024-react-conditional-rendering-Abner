export default function GenerateScoreLabel({ stock }) {
  if (stock >= 50) {
    return <span className="green">{stock}</span>;
  } else (stock <= 50) 
    return <span className="red">{stock}</span>;
  // } else {
  //   return <span className="black">{stock}</span>;
  // }
}
