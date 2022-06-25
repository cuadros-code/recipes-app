import footerImg from '../../assets/footer.png'
import './Footer.scss'

const Footer = () => {
  return (
   <footer>
    <p>Con el patrocinio de</p>
    <img src={footerImg} alt="footer" />
   </footer>
  )
}

export default Footer