import './Css.css';
export default function Home(){
return (
    <section id="home" className="home">
      <div className="home-container">
        <p className="home-kicker">Welcome to Kinara</p>
        <h1>Simple shopping for everyday essentials.</h1>
        <p className="home-copy">
          Discover selected electronics, fashion, and daily-use products with a clean, easy checkout.
        </p>
        <a className="home-link" href="#Products">Shop products</a>
      </div>
    </section>
)
}
