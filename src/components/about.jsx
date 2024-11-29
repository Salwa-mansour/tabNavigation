function About({activeTab}){
    return(
        <div className={`tab ${activeTab === 'about' && 'show'}`}>
             <h1>food for heros</h1>
            <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel
                explicabo sed necessitatibus quaerat, incidunt impedit reiciendis voluptatibus atque iure?
            </p>
        </div>
    )
}

export default About