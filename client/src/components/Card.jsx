import Caption from "./Caption"
import Citation from "./Citation"

export default function Card({ imgUri, altText, caption, citation, bgColor = "#fff" }) {
  function flipCard() {
    alert("TODO: flip card");
  }
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <button ariaLabel="flip card"
        onClick={flipCard}>
        <img src="/icons/flip.svg" />
      </button>

      <img src={imgUri} alt={altText} />
      {!!caption && <Caption text={caption} />}
      {!!citation && <Citation citation={citation} />}
    </div>
  )
}
