
function LastSeen() {
    const lastDate = new Date(Date.now())
    const date = lastDate.toLocaleDateString('es-co', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    return (
<span>Último inicio de sesión: {date}</span>
    )
}

export default LastSeen;