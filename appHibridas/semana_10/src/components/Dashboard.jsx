import Alert from "./Alert";

function Dashboard({ subjects, fn }){

    let lista = subjects.map((item) => <li> {item.name.toUpperCase()} </li> );
    
    //fn();
    function mostrarAlert(){
        alert('Soy un Arlet!');
    }

    console.log(lista);
    return(
        <main>
            <h2>Dashboard</h2>
            <ul>
                { subjects.map(item => <li key={item.id}> {item.name} </li> )}
            </ul>
            <hr/>
            <button  onClick={mostrarAlert}>Llamado al padre App.jsx</button>

            <Alert msg="Alerta " type="danger" number={5}/>
            <hr/>
            <Alert msg="Alerta " number="2"/>
            <hr/>
            <Alert msg="Alerta " number="3"/>
            
        </main>
    )
}

export default Dashboard;