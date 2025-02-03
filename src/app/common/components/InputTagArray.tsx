import React, { InputHTMLAttributes, useState } from "react";
import IconButton from "./IconButton";
import ExitIcon from "./icons/ExitIcon";
import clsx from "clsx";
import Button from "./Button";

interface ItemProps {
  value: string;
  onDelete: () => void;
}

const Item = (itemProps: ItemProps) => {
  const { value, onDelete } = itemProps;

  return (
    <div className="flex items-center justify-between pl-4 rounded-2xl bg-blue-300">
      <div>{value}</div>

      <IconButton onClick={onDelete}>
        <ExitIcon />
      </IconButton>
    </div>
  );
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  dataList: string[];
  changeArray: (arr: string[]) => void;
  name: string;
  labelTitle?: string;
  error?: string;
  containerClassName?: string;
  notPadding?: boolean;
}

// Función para formatear el número al agregarlo
const formatPhoneNumber = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, ""); // Elimina caracteres no numéricos
  if (onlyNumbers.length === 11) {
    return onlyNumbers.replace(/(\d{4})(\d{7})/, "$1-$2"); // Formatea XXXX-XXXXXXX
  }
  return value; // Retorna sin formatear si no tiene 11 dígitos
};

const InputTagArray = (props: Props) => {
  const {
    name,
    labelTitle,
    dataList,
    changeArray,
    error,
    containerClassName,
    className,
    notPadding,
    ...inputProps
  } = props;

  const [inputValue, setInputValue] = useState("");

  const onInsert = () => {
    const value = formatPhoneNumber(inputValue.trim());

    if (value.length !== 12) return; // Solo permite agregar si es válido "XXXX-XXXXXXX"
    if (dataList.includes(value)) return; // Evita duplicados

    setInputValue("");
    changeArray([...dataList, value]);
  };

  const onDeleteItem = (item: string) => {
    changeArray(dataList.filter((i) => i !== item));
  };

  return (
    <div className={clsx("flex flex-1 flex-col", notPadding || "mb-4", containerClassName)}>
      {labelTitle && <label htmlFor={name}>{labelTitle}</label>}

      {dataList.length > 0 && (
        <div className="flex flex-wrap gap-2 my-2">
          {dataList.map((d) => (
            <Item value={d} key={d} onDelete={() => onDeleteItem(d)} />
          ))}
        </div>
      )}

      <div className="flex">
        <input
          {...inputProps}
          className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          name={name}
          id={name}
          value={inputValue}
          onChange={({ target: { value } }) => {
            const onlyNumbers = value.replace(/\D/g, "").slice(0, 11); // Permite solo 11 dígitos numéricos
            setInputValue(onlyNumbers);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onInsert();
            }
          }}
        />

        <Button onClick={onInsert} className="ml-2">
          Añadir
        </Button>
      </div>

      <p className="text-red-400">{error}</p>
    </div>
  );
};

export default InputTagArray;
