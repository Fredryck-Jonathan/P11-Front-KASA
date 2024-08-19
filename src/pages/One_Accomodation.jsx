import { useEffect } from 'react';


/**ajout des composants */


//import Carousel from "../components/Carousel"


/**ajout du tableau de la base de données */
import Data  from "../data/data_logements.json";

/*Ajout de use params*/
import { useParams, Navigate } from "react-router-dom";


/*Importation des composants utiliser*/
import Tag from "../components/tag"
import Dropdown from "../components/dropdown";
import Carousel from '../layouts/Carousel';








function Accomodation() {

    useEffect(() => {
        changeColors()
    }, []);



    let { id } = useParams();

    function foundDetails(urlID) {
        return urlID.id === id;
    };

    let data = Data.find(foundDetails)

    if (data === undefined) {
        return <Navigate to="*"/>
    }

    function equipement() {

        let equipements = ""
        for (const element of data.equipments) {
            equipements = equipements + element + "\n"
        }
        return equipements
    }

    function changeColors() {
        if (data !== undefined) {
            const rate = Number(data.rating);
            const all_rate = document.querySelectorAll('.one_rate');
            all_rate.forEach((element, index) => {
                if (index < rate) {
                    element.style.color = '#FF6060'; // Change this color as needed
                } else {
                    element.style.color = '#E3E3E3';
                }
            })
        }
    }

    let equipement_content = equipement()

    return (
        <div id='accomodation_page' >

            <div className='carousel_div'>

            <Carousel pictures={data.pictures}></Carousel>

            </div>





            <div className="infos_div">
                <div className="infos_location">
                    <h3>{data.title}</h3>
                    <p>{data.location}</p>
                </div>

                <div className="all_tags">
                    {data.tags.map(item => (
                        <Tag name={item} key={item}></Tag>
                    ))}
                </div>

                <div className="infos_perso">
                    <h3>{ data.host.name }</h3>
                    <div className="infos_perso_img_mask">
                        <img src={data.host.picture} alt={"Representation de " + data.host.name} />
                    </div>
                </div>

                <div className="rate_div">
                    <ion-icon class="one_rate" name="star"></ion-icon>
                    <ion-icon class="one_rate" name="star"></ion-icon>
                    <ion-icon class="one_rate" name="star"></ion-icon>
                    <ion-icon class="one_rate" name="star"></ion-icon>
                    <ion-icon class="one_rate" name="star"></ion-icon>

                </div>

                <div className="dropdowns_div">

                    <Dropdown title="Description" content={data.description} ></Dropdown>

                    <Dropdown title="Équipements" content={equipement_content}></Dropdown>

                </div>


            </div>



        </div>

)}

export default Accomodation