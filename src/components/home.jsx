import reactLogo from '../assets/react.svg'

function Home({activeTab}){
    return(
        <div  className={`tab ${activeTab === 'home' && 'show'}`}>
               <h1>food for heros</h1>
               <img src={reactLogo} width="500"  alt="" />
        </div>
    )
}

export default Home