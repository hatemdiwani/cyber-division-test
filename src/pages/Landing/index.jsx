import Footer from "../../components/custom/Footer"
import Header from "../../components/custom/Header"
import Hero from "../../components/custom/Hero"
import Innovation from "../../components/custom/Innovation"
import Solutions from "../../components/custom/Solutions"
import Teams from "../../components/custom/Teams"
import './index.css'
export default () => {
    return (
        <>
            <div className="landing">
                <Header />
                <Hero />
                <Solutions />
                <Innovation />
                <Teams />
                <Footer />
            </div>
        </>
    )
}