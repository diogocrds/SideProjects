import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  FormControl,
  InputLabel,
  Input,
  Avatar,
} from '@material-ui/core'
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import db from '../firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
function Todo(props) {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    )
    setOpen(false)
    setInput('')
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Edit ToDo</h2>
      <form className='edit-input'>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <div className='edit-buttons'>
          <Button
            type='submit'
            onClick={updateTodo}
            variant='contained'
            color='primary'
            className='btn'
          >
            Edit
          </Button>
          <Button
            onClick={(e) => setOpen(false)}
            variant='contained'
            color='secondary'
            className='btn'
          >
            Exit
          </Button>
        </div>
      </form>
    </div>
  )
  let dateformat = require('dateformat')
  let date = props.todo.timestamp && props.todo.timestamp.toDate()
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>{body}</div>
      </Modal>
      <List className='todo'>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SubdirectoryArrowRightIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary={
              <React.Fragment>
                <AccessTimeIcon className='todo-icon' />
                {dateformat(date, ' dddd, mmmm dS, yyyy, h:MM:ss TT')}
              </React.Fragment>
            }
          />
        </ListItem>
        <Button
          className='btn'
          onClick={(e) => setOpen(true)}
          variant='contained'
          color='primary'
        >
          Edit
        </Button>
        <Button
          className='btn'
          onClick={(event) => {
            db.collection('todos').doc(props.todo.id).delete()
          }}
        >
          <DeleteForeverIcon color='secondary' />
        </Button>
      </List>
    </>
  )
}

export default Todo
