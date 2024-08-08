import { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const StartQuiz = ({ onStart }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Paso 3
  };

  const handleButtonClick = () => {
    // Aquí puedes usar inputValue como desees
    console.log("Valor del input:", inputValue);
    onStart(); // Llama a la función pasada como prop
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <Input
        placeholder="Nombre Apellido"
        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title="Será tomado en cuenta para el leaderboard">
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
        value={inputValue}
        onChange={handleInputChange}
        className="w-full max-w-md"
      />
      <Button
        type="primary"
        onClick={handleButtonClick}
        className="text-lg font-medium py-4 px-8 rounded-lg"
      >
        Iniciar quiz
      </Button>
    </div>
  );
};

export default StartQuiz;

