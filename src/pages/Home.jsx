/*Import des libraries utiliser*/

import Data from "../data/data_logements.json"

import Thumb from "../components/thumb"


function Home() {


    return (
        <div className='home_section'>

            <section className="slogan_section_home">

                <h2 className="title_home">Chez vous, partout et ailleurs</h2>
                
                <div className="div_home_img">
                </div>

            </section>


            <section className="gallery_home_section">
                {Data.map((card) => (
                    <Thumb id={card.id} title={card.title} cover={card.cover} description={card.description} key={card.id} />
                ))}
            </section>

        </div>
    )
}

export default Home