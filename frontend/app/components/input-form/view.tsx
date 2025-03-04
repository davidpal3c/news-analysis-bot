import React from 'react';

type InputFormViewProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFormView: React.FC<InputFormViewProps> = ({
  handleSubmit,
  inputValue,
  handleInputChange,
}) => (
  <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter your text or link"
      className="border border-gray-300 p-2 rounded text-black"
      required
    />
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
);

export default InputFormView;
