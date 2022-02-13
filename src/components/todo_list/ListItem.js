import React from 'react';
import { Fade } from 'react-reveal';

const ListItem = ({ items, handleEditItem, handleDeleteItem }) => {
  return (
    <>
      <h4 className="my-3 numberOfItemsTitle">
        Total Number Of Items: {items.length}
      </h4>
      {items.map((item) => (
        <Fade bottom>
          <div className="my-3 bg-white" key={item.id}>
            <div className="row">
              <div className="col-8 col-md-10">
                <div className="p-md-3 p-2">
                  <span className="listItemText text-break">{item.value}</span>
                </div>
              </div>
              <div className="col-4 col-md-2 text-center">
                <div className="p-md-3 p-2">
                  <i
                    className="fas fa-edit listItemEditIcon me-md-3 me-1"
                    onClick={() => handleEditItem(item.id)}
                  />
                  <i
                    className="fas fa-trash listItemDeleteIcon"
                    onClick={() => handleDeleteItem(item.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </>
  );
};

export default ListItem;
