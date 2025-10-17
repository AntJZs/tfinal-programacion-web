import './Sidebar.css'
// import '../../../assets/Logo.svg'

function Sidebar() {
    return (
        <div className='side-bar'>
        {/* Primero se va a realizar con texto, si queda tiempo
            se realizará con íconos */}
        <p>Fancy Navbar</p>

        <div className="logo">
            <img src="/src/assets/icon.svg" className='logo'/>
        </div>
            <div className='menu'>
            <div className="menulist">
                <div className="menuitem">
                    <p>Inicio</p>
                </div>
                <div className="menuitem">
                    <p>Transacciones</p>
                </div>
                <div className="menuitem">
                    <p>Préstamos</p>
                </div>
                <div className="menuitem">
                    <p>Estadísticas</p>
                </div>
            </div>
            <div className="menulist">
                <div className="menuitem">
                    <p>Largarse</p>
                </div>
                <br /> {/* Que no digan nada por esto */}
            </div>
        </div>
        </div>
    )
}

export default Sidebar;