import {useState} from "react"

import Caption from "./Caption"
import Citation from "./Citation"

export default function Card({ imgUri, altText, caption, citation, bgColor = "#fff" }) {
  const [isFlipped, setIsFlipped] = useState(false)

  function flipCard() {
    setIsFlipped(!isFlipped)
  }
  
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <button ariaLabel="flip card"
        onClick={flipCard}>
        <img src="/icons/flip.svg" />
      </button>

      {/* added the !isFlipped */}
      {!isFlipped && <img src={imgUri} alt={altText} />}
      {!!isFlipped && <>
        {!!caption && <Caption text={caption} />}
        {!!citation && <Citation citation={citation} />}
      </>}
    </div>
  )
}
