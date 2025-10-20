import './Sidebar.css'
// import '../../../assets/Logo.svg'

function Sidebar() {
    return (
        <div className='side-bar'>
        {/* Primero se va a realizar con texto, si queda tiempo
            se realizará con íconos */}
        <p>Fancy Sidebar</p>

        <div className="logo">
            <img src="/src/assets/icon.svg" className='logo'/>
        </div>
            <div className='menu'>
            <div className="menulist">
                <a href="/user/dashboard" className="menuitem">
                    <div className="menuitem">
                        <p>Inicio</p>
                    </div>
                </a>
                <a href="/user/history" className="menuitem">
                    <div className="menuitem">
                        <p>Transacciones</p>
                    </div>
                </a>
                <a href="/user/loans" className="menuitem">
                    <div className="menuitem">
                        <p>Préstamos</p>
                    </div>
                </a>
                <a href="/user/stats" className="menuitem">
                    <div className="menuitem">
                        <p>Estadísticas</p>
                    </div>
                </a>
            </div>
            <a href="/" className="menuitem">
            <div className="menulist">
                <div className="menuitem">
                    <p>Salir</p>
                </div>
            </div>
            </a>
                <br /> {/* Que no digan nada por esto */}
        </div>
        </div>
    )
}

export default Sidebar;