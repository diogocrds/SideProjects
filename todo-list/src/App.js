import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css'
import Todo from './components/Todo'
import db from './firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // when the app loads, need to listen to the database for new todos as they get added/removed
  useEffect(() => {
    // fires when the app.js loads
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            timestamp: doc.data().timestamp,
          }))
        )
      })
  }, [])

  // click of the button
  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    //setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <form className='add-input'>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type='submit'
          onClick={addTodo}
          variant='contained'
          color='primary'
          className='btn'
        >
          Add Todo
        </Button>
      </form>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
