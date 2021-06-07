import{useState} from "react";
import './style.css';



const App = ()=> {
    // creat a state to hold the currently focuessed input

    const[FocussedInput, setFocussedInput] = useState(null);
   
    //const usernameRef =useRef();
    //const passwordRef =useRef();

    //Button Handler

    const btnHandler=(e)=> {
       
        setFocussedInput((CurrFoc) => {
        let val = CurrFoc.value + e.target.value;
        CurrFoc.value = val;
        return CurrFoc;

        });
        FocussedInput.focus();
        };

        const btnBackSpaceHandler =() => {
            setFocussedInput(FocussedInput.slice(0, -1))

        };
    
//         const setFocussed =(e) =>{

//         }
//     useEffect(() =>{
//        const inputElements = document.querySelectorAll("input")
//    inputElements.forEach((input) =>{
//        input.addEventListener("focus", setFocussed)
//    });
    
    
//     },[])


    return (
        <div className="App">
                <div className="login-form">
                    <h2>Login</h2>

                        <input 
                        type="text" 
                        placeholder="Enter Username"
                        onFocus={(e) => setFocussedInput(e.target)}/>

                        <input 
                        type="password" 
                        placeholder="Password"
                        onFocus={(e) => setFocussedInput(e.target)}/>
                </div>
           
           
        <div className="keyboard-container">
            <div className="key-row">
                <button value="1" onClick={btnHandler}>1</button>
                <button value="2" onClick={btnHandler}>2</button>
                <button value="3" onClick={btnHandler}>3</button>
                <button value="4" onClick={btnHandler}>4</button>
                <button value="5" onClick={btnHandler}>5</button>
                <button value="6" onClick={btnHandler}>6</button>
                <button value="7" onClick={btnHandler}>7</button>
                <button value="8" onClick={btnHandler}>8</button>
                <button value="9" onClick={btnHandler}>9</button>
                <button value="0" onClick={btnHandler}>0</button>
        
            </div>
            <div className="key-row">
                <button value="Q" onClick={btnHandler}>Q</button>
                <button value="W" onClick={btnHandler}>W</button>
                <button value="E" onClick={btnHandler}>E</button>
                <button value="R" onClick={btnHandler}>R</button>
                <button value="T" onClick={btnHandler}>T</button>
                <button value="Y" onClick={btnHandler}>Y</button>
                <button value="U" onClick={btnHandler}>U</button>
                <button value="I" onClick={btnHandler}>I</button>
                <button value="0" onClick={btnHandler}>O</button>
                <button value="P" onClick={btnHandler}>P</button>

             </div>
            <div class="key-row">
                <button value="A" onClick={btnHandler}>A</button>
                <button value="S" onClick={btnHandler}>S</button>
                <button value="D" onClick={btnHandler}>D</button>
                <button value="F" onClick={btnHandler}>F</button>
                <button value="G" onClick={btnHandler}>G</button>
                <button value="H" onClick={btnHandler}>H</button>
                <button value="J" onClick={btnHandler}>J</button>
                <button value="K" onClick={btnHandler}>K</button>
                <button value="L" onClick={btnHandler}>L</button>
        
            </div>
            <div className="key-row">
                <button className="btn-large">Shift</button>
                <button value="Z" onClick={btnHandler}>Z</button>
                <button value="X" onClick={btnHandler}>X</button>
                <button value="C" onClick={btnHandler}>C</button>
                <button value="V" onClick={btnHandler}>V</button>
                <button value="B" onClick={btnHandler}>B</button>
                <button value="N" onClick={btnHandler}>N</button>
                <button value="M" onClick={btnHandler}>M</button>
                <button className="btn-full" onclick={btnBackSpaceHandler}>Backspace</button>
                </div>
                <div className="key-row">
                    <button value=" " className="btn-full" onClick={btnHandler}></button>
                 </div>
     </div> 
        </div>
    );

}

export default App;
