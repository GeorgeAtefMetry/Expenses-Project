import './Card.css'

function Card(props){
    const classes = 'card ' + props.className;
    
    return (
        <div className={classes}>
            {props.children} 
            {/* Children is a Reserved Name 
            and the Value of this special children prop 
            will always be the content between the opening and closing Tag 
            of your custom component */}
        </div>
    )
}

export default Card; 