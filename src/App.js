import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [shade, setShade] = useState(10)
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#222').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      console.log(shade)
      let colors = new Values(color).all(Number(shade))
      // setError(false)
      // console.log(colors)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <h3>color generator</h3>
      <section className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <input
            type='number'
            value={shade}
            onChange={(e) => setShade(e.target.value)}
            placeholder=''
            className={'shade-box'}
          />
          <button className='btn' type='submit'>
            get colors
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...item}
              index={index}
              hexColor={item.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
