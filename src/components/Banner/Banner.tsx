import banner from "../../assets/bcq.jpg"
import "./Banner.scss"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__title">
        <h1> Recetas<span> para todos</span></h1>
      </div>
      <img src={banner} className="banner__img" alt="banner" />
    </div>
  )
}

export default Banner