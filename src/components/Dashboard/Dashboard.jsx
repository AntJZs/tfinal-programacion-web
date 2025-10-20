import Sidebar from "./global/Sidebar";
import LastSeen from "./global/LastSeen";
import BalanceHistory from "./BalanceHistory";
import './Dashboard.css'
import Details from "./Details";

function Dashboard(page) {

    return (
        <div className="dashboard column">
            <Sidebar className="navbar" />
            <div className="content">
            <div className="buttonbar">
                <button className="button-fab">
                <span>Nueva transferencia</span>
                </button>
                <button className="button-fab">
                <span>Información de la cuenta</span>
                </button>
            </div>
            <div className="main-content">
                {/* Cambia dependiendo a la interfaz a la que se vaya */}
                {/* Deuda técnica */}
                {Switcher(page.num)}
            </div>
                <LastSeen/>
            </div>
        </div>
    )
}

function Switcher(page) {

        switch (page) {
            case '1':
                    return (
                <BalanceHistory/>
                    );
        

        default:
            return (
            <Details name='Lorem Ipsum dolor' accid='LID123' bal='1200000' outs='60000' debt='0' />
            )
        }
    

}

export default Dashboard;