import { Link } from 'react-router-dom'

function SongDetails() {
  return (
    <section className="destination page-content">
      <span className="section-index">SONG DETAILS</span>
      <h1>Song Details</h1>
      <p>Song details will appear here.</p>
      <Link className="primary-link" to="/explore">
        Back to explore <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

export default SongDetails
