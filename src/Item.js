import React from 'react'
import { default as List } from './ListContainer'

const style = {
  border: '1px solid',
  marginBottom: '10px'
}

export default ({ title, description, fields }) => (
  <article style={style}>
    <h1>{title}</h1>
    <h3>{description}</h3>
    {
      fields &&
        <fieldset>
          <List fields={fields} />
        </fieldset>
    }
    
  </article>
)
