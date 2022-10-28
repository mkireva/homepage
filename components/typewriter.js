import React from 'react'
import Typewiter from 'typewriter-effect'
const typewriter = () => {
  return (
    <div>
      <Typewiter
        onInit={typewriter => {
          typewriter
            .typeString('Hello, I am a fullstack developer based in Munich!')
            .pauseFor(2000)
            .deleteAll()
            .typeString('I like programming, philosophy, music and nature.')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Have a nice time on this website!')
            .start()
        }}
      />
    </div>
  )
}

export default typewriter
