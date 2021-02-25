export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    item,
  };
};

export const deleteMovie = (itemId) => {
  return {
    type: "DELETE_ITEM",
    itemId,
  };
};


export const editMovie = (item) => {
  return {
    type: "EDIT_ITEM",
    item,
  };
};
