import Nav from './components/Nav.jsx'
import Foot from './components/Footer.jsx'
import Content from './components/Content.jsx';
import MenuBar from './components/Menu.jsx';

function App(){
    return (
        <div className='bg-gray-100 h-screen flex flex-col justify-between overflow-hidden'>
            <Nav/>
            <MenuBar/>
            <Content/>
            <Foot/>
        </div>
    )
}

export default App;