import React, { useState } from 'react'

const Index = () =>{

    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('valor do elemento: ',e)
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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque nam reprehenderit amet obcaecati iusto quaerat in earum hic praesentium, nemo excepturi aut rerum esse recusandae! Non accusamus aut quod!</p>
            </article>
        </section>
    )
}

export default Index