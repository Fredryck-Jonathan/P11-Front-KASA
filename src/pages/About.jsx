import Data_about from "../data/data_about";
import Dropdown from "../components/dropdown";

function About() {
    return (
        <div className='about_section'>
            <div className="intro_about_div">
                <img src={require('../assets/background_about_img.png')} alt="montagne avec verdure"></img>
            </div>
            <div className="gallery_dropdown_about_div">
                    {Data_about.map((about) => (
                        <Dropdown title={about.title} content={about.content} key={about.title}></Dropdown>
                    ))}
            </div>
        </div>
    )
}
export default About;