import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ContentActions } from '@state/content'

import Table from '@components/Table'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/api/http_trigger')
    .then(response => response.json())
    .then(data => {
      const parsed_data = data.map((item: any) => {
        // Only parse formSpecification if it is present
        return {
          ...item,
          formSpecification: item.formSpecification ? JSON.parse(item.formSpecification) : undefined
        }
      })
      dispatch(ContentActions.setContent({
        data: parsed_data
      }))
    })
  }, [])

  return (
    <>
      <Table />
    </>
  );
  
}

export default App
