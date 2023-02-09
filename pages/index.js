import React, { useState } from 'react'
import data from './data'

const Index = () =>{

    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        let amount = parseInt(count)
        if( count <= 0 ){
            amount = 1
        }
        if(count  > 10){
            amount = 10
        }
        setText(data.slice(0,amount))
    }

    return(
        <section>
            <h3>Tired of boring lorem ipsum?</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor='amount' >
                    Paragraphs:
                </label>
                <input type="number" name="amount" id="amount" 
                    value={count}
                
                    onChange={(e) => setCount(e.target.value)}

                />
                <button type="submit" >generate</button>
            </form>
            <article>
                <p>
                    {
                        text.map((item,index)=>{
                            return(
                                <p key={index} >
                                    {item}
                                </p>
                            )
                        })
                    }
                </p>
            </article>
        </section>
    )
}

export default Index