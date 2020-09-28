import { useState } from 'react'
import Select from './Select'

const SelectTemplate = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  const [selectedOption, setSelectedOption] = useState(null)

  console.log(selectedOption)


  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  )
}

export default SelectTemplate