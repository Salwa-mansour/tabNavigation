function Contact({activeTab}){
    return(
        <div className={`tab ${activeTab === 'contact' && 'show'}`}>
             <h1>food for heros</h1>
            <form action="">
                    <input type="text" name="name" placeholder="name" />
                    <input type="email" name="email" placeholder="email" />
                    <textarea name="message"  placeholder="message" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}

export default Contact