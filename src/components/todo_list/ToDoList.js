import React, { useReducer } from 'react';
import ListItem from './ListItem';
import ListItemForm from './ListItemForm';
import './ToDoListStyle.css';
import reducer from './reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade, Zoom  } from 'react-reveal';

const initialState = {
  items: [],
  currentItemValue: '',
  toastActive: false,
  addBtn: true,
  editItemId: '',
};

const toastStyle = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let { currentItemValue, addBtn } = state;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (currentItemValue) {
      if (addBtn) {
        dispatch({ type: 'ADD_ITEM' });
        toast('New Item Added', toastStyle);
      } else {
        dispatch({ type: 'EDIT_ITEM' });
        toast('Item Updated', toastStyle);
      }

      dispatch({ type: 'TOAST_ACTIVE' });
    }
  };

  const handleOnChange = (e) => {
    dispatch({ type: 'HANDLE_INPUT_ITEM', payload: e.target.value });
  };

  const handleEditItem = (itemId) => {
    dispatch({ type: 'EDIT_BTN', payload: itemId });
  };

  const handleDeleteItem = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
    dispatch({ type: 'TOAST_ACTIVE' });
    toast('Item Deleted', toastStyle);
    dispatch({ type: 'ADD_BTN' });
  };

  return (
    <div className="toDoList py-3">
      {state.toastActive && <ToastContainer />}
      <div className="container">
        <Fade top>
          <h1 className="toDoListMainTitle py-5">Simple To Do List</h1>
        </Fade>

        <Zoom bottom>
          <ListItemForm
            handleFormSubmit={handleFormSubmit}
            handleOnChange={handleOnChange}
            {...state}
          />
        </Zoom>

        <Fade bottom>
          <ListItem
            {...state}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        </Fade>
      </div>
    </div>
  );
};

export default ToDoList;
