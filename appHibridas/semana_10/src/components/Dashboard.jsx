import Alert from "./Alert";
import Card from "./Card";
import Cards from "./Cards";
import Cards2 from "./Cards2";

function Dashboard({ subjects, fn }){

    let lista = subjects.map((item) => <li> {item.name.toUpperCase()} </li> );
    
    //fn();
    function mostrarAlert(){
        alert('Soy un Arlet!');
    }

    const data = [
        { id:1, title:'Alumnos', description:'124 Activos'},
        { id:2, title:'Materias', description:'15 Activas'},
        { id:3, title:'Inscripciones', description:'220 activos'},
        { id:4, title:'Asistencias', description:'75%'},
    ]

    console.log(lista);
    return(
        <main>
            <h2>Dashboard</h2>
            <Card title="Panel principal" description="Resumen general del sistema"/>
            
            <Cards>
                {
                data.map( item => <Card 
                                    key={ item.id }
                                    title={ item.title } 
                                    description={ item.description }
                                /> )
                }

            </Cards>
            <hr/>

            {/* 
            <Cards2 data={data}/>
            */}
            
            {/*
                <ul>
                        { subjects.map(item => <li key={item.id}> {item.name} </li> )}
                </ul> 
            */} 

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