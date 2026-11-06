import { Link } from 'react-router-dom'

function Explore() {
  return (
    <section className="destination page-content">
      <span className="section-index">01 / DISCOVER</span>
      <h1>Explore Music</h1>
      <p>Discover your next favorite track.</p>
      <Link className="primary-link" to="/song/1">
        View a song <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

export default Explore
