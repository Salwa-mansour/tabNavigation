function Nav({setActiveTab}){
    return(
        <nav>
            <button data-nav="home" onClick={()=>setActiveTab('home')}>home</button>
            <button data-nav="about" onClick={()=>setActiveTab('about')} >about</button>
            <button data-nav="contact" onClick={()=>setActiveTab('contact')} >contact</button>
       </nav>
    )
}

export default Nav