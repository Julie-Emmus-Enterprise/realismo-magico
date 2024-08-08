import { Card, Button } from 'antd';

const InfoCard = ({ name, backAction }) => {
  return (
    <Card
      title={`Bienvenido ${name}`}
      className="relative w-full max-w-lg min-h-[50vh] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 mx-auto"
    >
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <p className="text-sm">
          Este es un juego de preguntas y respuestas para la mujer de mi vida.
          Donde encontrarás 10 preguntas que tendrás que responder en un determinado tiempo.
          Y además recibirás una puntuación por cada pregunta que respondas correctamente.
          y por armar el rompecabezas al final.
        </p>
      </div>
      <div className="absolute bottom-4 left-4 flex gap-4">
        <Button
          type="default"
          onClick={backAction}
          className="text-sm font-medium py-4 px-8 rounded-sm"
        >
          Regresar
        </Button>
        <Button
          type="primary"
          className="text-sm font-medium py-4 px-8 rounded-sm"
        >
          Iniciar quiz
        </Button>
      </div>
    </Card>
  );
};

export default InfoCard;
