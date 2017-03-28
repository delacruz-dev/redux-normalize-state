import  { schema, normalize } from 'normalizr'
import originalData from './schema.json'

export default function getInitialState () {
  const block = new schema.Entity('fields')
  const blockList = new schema.Array(block)
  
  block.define({
    fields: blockList
  })

  const normalizedData = normalize(originalData.fields, blockList)

  return {
    ...originalData,
    fieldRefs: normalizedData.result,
    fields: normalizedData.entities.fields
  }
}
