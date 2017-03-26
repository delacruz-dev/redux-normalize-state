import React from 'react'
import { default as Item } from './ItemContainer'

export default ({ fields }) => (
  <div>
    {fields.map(f => <Item id={f} key={f} />)}
  </div>
)
