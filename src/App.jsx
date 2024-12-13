
import './App.css'
import { motion} from "framer-motion";
import Header from "./components/header/Header";
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
function App() {


  return (
    <>
      <div className="hasmi">
        <motion.div className="Heeader"
        initial={{ y: "-100vw" }} // Soldan çıkacak
        animate={{ y: 0 }} // Ortaya gelsin
        transition={{ type: "spring", stiffness: 100, damping: 25 }}>
          <Header/></motion.div>
      <motion.div className="Seection"
      initial={{ x: "-100vw" }} // Soldan çıkacak
      animate={{ x: 0 }} // Ortaya gelsin
      transition={{ type: "spring", stiffness: 100, damping: 25 }}> <Section/></motion.div>

    <motion.div className="Fooo"
    initial={{ x: "100vw" }} // Soldan çıkacak
    animate={{ x: 0 }} // Ortaya gelsin
    transition={{ type: "spring", stiffness: 100, damping: 25 }}><Footer/></motion.div>
     
     </div>
    </>
  )
}

export default App
