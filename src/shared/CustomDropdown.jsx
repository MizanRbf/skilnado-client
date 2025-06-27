import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const sortOptions = [
  { value: "deadline-asc", label: "Deadline ↑ (Earliest)" },
  { value: "deadline-desc", label: "Deadline ↓ (Latest)" },
  { value: "budget-asc", label: "Budget ↑ (Low to High)" },
  { value: "budget-desc", label: "Budget ↓ (High to Low)" },
];

const CustomDropdown = ({ onSelect, selected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="px-2 text-sm md:text-lg md:px-6 py-2 border border-primary rounded-sm font-semibold flex items-center gap-2 bg-white hover:bg-gray-100"
      >
        {sortOptions.find((opt) => opt.value === selected)?.label || "Sort By"}
        <FaChevronDown />
      </button>

      {open && (
        <ul className="absolute mt-2 bg-white shadow-lg rounded-md w-56 max-w-[220px] right-0 left-auto z-50 transition-all duration-200">
          {sortOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onSelect(option.value);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-secondary hover:text-white cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
