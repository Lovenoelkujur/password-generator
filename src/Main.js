import React, { useCallback, useEffect, useRef, useState } from 'react'
import "./Main.css"

const Main = () => {

    const [length, setLength] = useState(8)
    const [upperCaseAllowed, setUpperCaseAllowed] = useState(false)
    const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = ""

        if(upperCaseAllowed){
            str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }

        if(lowerCaseAllowed){
            str += "abcdefghijklmnopqrstuvwxyz"
        }

        if(numberAllowed){
            str += "0123456789"
        }

        if(characterAllowed){
            str += "!@#$%^&*-_=+~"
        }

        //loop for length
        for(let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    },[length, upperCaseAllowed, lowerCaseAllowed, numberAllowed, characterAllowed, setPassword])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, upperCaseAllowed, lowerCaseAllowed, numberAllowed, characterAllowed, passwordGenerator])

  return (

    <div className='main'>
        
        <div className='container'>
            <h1 className='title'>Password Generator</h1>
            <div>
                <input 
                    type='text'
                    placeholder='Password'
                    readOnly
                    value={password}
                    ref={passwordRef}
                    className='text-input'
                ></input>
            </div>
            <div className='options'>

                <div className='left-section'>
                    <input
                        className='length'
                        type='range'
                        min={8}
                        max={27}
                        value={length}
                        onChange={(e) => {setLength(e.target.value)}}
                    ></input>

                    <input
                        className='box'
                        type='checkbox'
                        defaultChecked={upperCaseAllowed}
                        onChange={() => {
                            setUpperCaseAllowed((prev) => !prev)
                        }}
                    ></input>

                    <input
                        className='box'
                        type='checkbox'
                        defaultChecked={lowerCaseAllowed}
                        onChange={() => {
                            setLowerCaseAllowed((prev) => !prev)
                        }}
                    ></input>

                    <input
                        className='box'
                        type='checkbox'
                        defaultChecked={numberAllowed}
                        onChange={() => {
                            setNumberAllowed((prev) => !prev)
                        }}
                    ></input>

                    <input
                        className='box'
                        type='checkbox'
                        defaultChecked={characterAllowed}
                        onChange={() => {
                            setCharacterAllowed((prev) => !prev)
                        }}
                    ></input>
                </div>
                <div className='right-section'>
                    <label>Length: {length}</label>
                    <label>UpperCase</label>
                    <label>LowerCase</label>
                    <label>Numbers_&nbsp;</label>
                    <label>Characters</label>
                </div>

                <div className='custom-option'>
                    
                    
                </div>

                <div className='custom-option'>
                    
                    
                </div>

                <div className='custom-option'>
                    
                    
                </div>
                
                <div className='custom-option'>
                    
                    <div>
                        
                    </div>
                </div>
                
                <div className='custom-option'>
                    
                    <div>
                        
                    </div>
                    
                </div>
                
            </div>

            <div>
                <button onClick={passwordGenerator} className='btn b1'>Create Password</button>
                <button onClick={copyPassword} className='btn b2'>Copy Password</button>
            </div>
            
        </div>
    </div>
  )
}

export default Main