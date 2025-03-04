'use client';

import React, { useState } from 'react';
import InputFormView from './view';

type InputFormProps = {
  onSubmit: (data: string) => void;
};

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!inputValue) {
          return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsQuery/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: inputValue }),            // field name content
        });

        if (response.ok) {
            // Handle successful submission (e.g., clear input or show a success message)
            onSubmit(inputValue);
            setInputValue('');
        } else {
            // Handle error (e.g., show an error message)
            console.error('Submission failed');
        }
    };

  return (
    <InputFormView
      handleSubmit={handleSubmit}
      inputValue={inputValue}
      handleInputChange={handleInputChange}
    />
  );
};

export default InputForm;
