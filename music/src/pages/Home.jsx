import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="welcome">
      <p className="eyebrow">YOUR NEXT FAVORITE TRACK IS HERE</p>
      <h1>Welcome to Music Explorer 🎵</h1>
      <p className="welcome-copy">
        Discover your next favorite song.
      </p>
      <Link className="primary-link" to="/explore">
        Explore music <span aria-hidden="true">→</span>
      </Link>
      <div className="sound-art" aria-hidden="true">
        <span className="sound-orb sound-orb-one" />
        <span className="sound-orb sound-orb-two" />
        <span className="sound-orb sound-orb-three" />
        <span className="sound-note">♫</span>
      </div>
    </section>
  )
}

export default Home
