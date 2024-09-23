import './Button.css'

function Button() {

    function handleButton(){
        console.log('Naciśnięcie przycisku')
    }

    function handleButton2() {
        console.log('Najechanie na przycisk')
    }
    
    return <>
    <button onClick={handleButton}>Nacisnij mnie!</button>
    <button onMouseEnter={handleButton2}>Najedź</button>
    
    </>
}

export default Button