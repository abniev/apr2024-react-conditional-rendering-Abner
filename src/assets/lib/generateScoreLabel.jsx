export default function GenerateScoreLabel({ IMDBRating }) {
  if (IMDBRating > 9) {
    return <span className="green">9+</span>;
  } else if (IMDBRating < 7) {
    return <span className="red">{IMDBRating}</span>;
  } else {
    return <span className="black">{IMDBRating}</span>;
  }
}
