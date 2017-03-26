import React from 'react'

const style = {
  border: '1px solid',
  marginBottom: '10px'
}

export default ({ title, description }) => (
  <article style={style}>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </article>
)
