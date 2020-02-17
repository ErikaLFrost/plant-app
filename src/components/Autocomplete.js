import React, { useState } from "react";
import Downshift from "downshift";
import plantInfo from "../plantInfo.json";

const plants = plantInfo.plants.map(plants => plants);

export default function Autocomplete({ selectedItem, onItemSelected }) {
  const [items, setItems] = useState(plants);

  const itemToString = plants => (plants ? plants.name : "");

  const onInputValueChanged = inputValue => {
    const items = plants.filter(p =>
      p.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setItems(items);
  };

  return (
    <Downshift
      selectedItem={selectedItem}
      onChange={onItemSelected}
      onInputValueChange={onInputValueChanged}
      itemToString={itemToString}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getLabelProps
      }) => (
        <div>
          <label
            style={{ marginTop: "1rem", display: "block" }}
            {...getLabelProps()}
          >
            Välj växttyp
          </label>{" "}
          <input {...getInputProps({ placeholder: "Sök växttyp" })} />
          {isOpen ? (
            <div className="downshift-dropdown">
              {items
                .filter(
                  item =>
                    !inputValue ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className="dropdown-item"
                    {...getItemProps({ key: item.name, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal",
                      color: highlightedIndex === index ? "black" : "grey"
                    }}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}
