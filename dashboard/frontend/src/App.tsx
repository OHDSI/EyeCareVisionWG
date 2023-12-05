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
      dispatch(ContentActions.setContent({
        data: data
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
