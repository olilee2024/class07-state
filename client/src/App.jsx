import Card from './components/Card'
import Alert from './components/Alert'

export default function App() {
  return (
    <main>
      <Alert message="Welcome to the space gallery!" />
      <div className="gallery">
        <Card imgUri="/images/galaxy.webp" altText="galaxy" caption="A galaxy is a collection of stars, gas, and dust held together by gravity." citation="Microsoft Copilot" />
        <Card imgUri="/images/asteroid.webp" altText="asteroid" />
        <Card imgUri="/images/black-hole.webp" altText="black hole" caption="A black hole, a region of space where gravity is so strong that nothing can escape it." />
        <Card imgUri="/images/cloud-nebulae.webp" altText="cloud nebulae" caption="A cloud of gas and dust in space." bgColor="#d8e0ff" />
        <Card imgUri="/images/distant-space.webp" altText="distant space" citation="Microsoft Copilot" bgColor="#c9f4e2" />
        <Card imgUri="/images/galaxy-collision.webp" altText="galaxy collision" />
        <Card imgUri="/images/moon.webp" altText="moon" citation="Microsoft Copilot" />
        <Card imgUri="/images/pulsar.webp" caption="A pulsar is a rapidly rotating neutron star that emits beams of electromagnetic radiation." altText="pulsar" bgColor="#e3cef2" />
        <Card imgUri="/images/star-death.webp" altText="star death" />
        <Card imgUri="/images/sun.webp" altText="sun" />
      </div>

      <h2>Debug Info</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
