import  { schema, normalize } from 'normalizr'
import originalData from './schema.json'

export default function getInitialState () {
  const groupedBlock = new schema.Entity('fields')

  // Define a block schema
  const block = new schema.Entity('fields', {
    fields: [ groupedBlock ]
  });

  // Define the form
  const form = new schema.Entity('form', {
    fields: [ block ]
  });

  return normalize(originalData, form).entities;
}
