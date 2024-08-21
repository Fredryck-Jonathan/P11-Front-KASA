/*Import des libraries utiliser*/
import { Link } from "react-router-dom"
function ErrorPage() {
    return (
        <div className='error_section'>
            <h3 className="title_error_page">404</h3>
            <p className="text_error_page">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link_error_page" to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default ErrorPage