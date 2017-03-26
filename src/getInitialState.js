import  { schema, normalize } from 'normalizr'
import originalData from './schema.json'

export default function getInitialState () {
  const block = new schema.Entity('fields')
  const blockList = new schema.Array(block)
  
  block.define({
    fields: blockList
  })

  const form = new schema.Entity('form', {
    fields: blockList
  });

  return normalize(originalData, form);
}
