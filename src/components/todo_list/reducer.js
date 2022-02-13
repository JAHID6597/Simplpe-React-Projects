const reducer = (state, action) => {
  const { items, currentItemValue, editItemId } = state;
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items,
          { id: new Date().getTime().toString(), value: currentItemValue },
        ],
        currentItemValue: '',
      };

    case 'EDIT_ITEM':
      const editItemIdx = items.findIndex((item) => item.id === editItemId);
      items[editItemIdx].value = currentItemValue;
      return { ...state, editItemId: '', currentItemValue: '', addBtn: true };

    case 'DELETE_ITEM':
      const newItems = items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
        editItemId: '',
        currentItemValue: '',
        addBtn: true,
      };

    case 'HANDLE_INPUT_ITEM':
      return { ...state, currentItemValue: action.payload };

    case 'TOAST_ACTIVE':
      return { ...state, toastActive: true };

    case 'EDIT_BTN':
      const currentItem = items.find((item) => item.id === action.payload);
      console.log(currentItem.value);
      return {
        ...state,
        currentItemValue: currentItem.value,
        editItemId: action.payload,
        addBtn: false,
      };

    default:
      return { ...state };
  }
};

export default reducer;
