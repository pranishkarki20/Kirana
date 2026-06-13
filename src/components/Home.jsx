import './Css.css';
export default function Home(){
return (
    <section id="home" className="home">
      <video className="home-video" autoPlay loop muted playsInline>
        <source src="/product.mp4" type="video/mp4" />
      </video>
      <div className="home-overlay" />
      <div className="home-container">
        <h1>Shop everyday essentials with a cleaner experience.</h1>
        <p className="home-copy">
          Explore electronics, fashion, and daily-use products in a fast, simple store built for easy browsing.
        </p>
        <div className="home-actions">
          <a className="home-link" href="#Products">Shop products</a>
          <a className="home-link secondary" href="/pages/product">View collection</a>
        </div>
      </div>
    </section>
)
}
