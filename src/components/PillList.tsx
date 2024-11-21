import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface PillListProps {
  title: string;
  description?: string;
  id: string;
  isRequired: boolean;
  items: string[];
  onItemsChange: (items: string[]) => void;
}

const PillList: React.FC<PillListProps> = ({ title, description, id, isRequired, items, onItemsChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      onItemsChange([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onItemsChange(newItems);
  };

  return (
    <div className="col-span-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        {title}
        {isRequired && "*"}
      </h3>
      {description && <span className="block text-xs text-gray-500">{description}</span>}

      <div className="border rounded flex flex-wrap gap-0.5 mb-2 p-0.5 border-solid border-[#e3e6ec]">
        {items.map((item, index) => (
          <div
            key={`pill-list-item-${uuidv4()}`}
            className="border rounded bg-[white] text-sm flex items-center gap-2 px-1 py-0.5 border-solid border-[#e3e6ec]"
          >
            <span className="text-[rgb(71,147,220)]">{item}</span>
            <button
              onClick={() => handleRemoveItem(index)}
              className="text-[rgb(96,115,149)] text-[22px] h-3.5 relative -top-1"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <input
          id={id}
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="rounded-md border p-2"
          placeholder="Add item"
        />
        <button
          onClick={handleAddItem}
          className="ml-3 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default PillList;
