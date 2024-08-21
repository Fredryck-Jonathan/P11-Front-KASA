function Dropdown(props) {
    function toggleDropdown(e) {
        const element_event = e.currentTarget;
        const parent_element = element_event.closest('.dropdown_div');
        const text_element = parent_element.querySelector('.text_part_dropdown');
        const chevron_element = parent_element.querySelector('.chevron_div');
        chevron_element.classList.toggle('active')
        text_element.classList.toggle('active');
    }
    return (
        <div className="dropdown_div">
            <div className="title_part_dropdown" onClick={toggleDropdown}>
                <h4>{props.title}</h4>
                <div className="chevron_div">
                    <ion-icon  name="chevron-up-outline"></ion-icon>
                </div>
            </div>
            <div className="text_part_dropdown">
                <p>{ props.content }</p>
            </div>
        </div>
    )
}
export default Dropdown;