import React, { useState } from 'react'
import data from './data'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

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
        <section className='container' >
            <div className="mt-5 d-flex justify-content-center flex-column align-items-center">
            <h3>Tired of boring lorem ipsum?</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor='amount' >
                    Paragraphs:
                </label>
                <input type="number" name="amount" id="amount" 
                    value={count}
                
                    onChange={(e) => setCount(e.target.value)}

                />
                <button className='btn btn-primary' type="submit" >generate</button>
            </form>
            <article className='mt-4' >
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
            </div>
        </section>
    )
}

export default Index