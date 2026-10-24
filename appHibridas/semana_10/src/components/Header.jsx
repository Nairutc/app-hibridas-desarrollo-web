function Header({ titulo, description }){
//const { titulo, description } = props;

return(
    <header>
        <h1> { titulo } </h1> 
        <p> { description } </p>
    </header>
)

}

export default Header