import { Button, Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from 'next/link';

import { validateName } from "../utils/yup/validateName";

const StartQuiz = ({ onStart }) => {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validateName}
      onSubmit={(values) => {
        onStart(values.name);
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className="flex flex-col items-center space-y-3 w-full max-w-md">
          <Link href="/leaderboard">
            <Button type="dashed" className="absolute top-0 right-0 m-4">
              Leaderboard
            </Button>
          </Link>
          <div className="w-full py-2 px-8">
            <Field
              name="name"
              as={Input}
              placeholder="Nombre Apellido"
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title="Será tomado en cuenta para el leaderboard una vez que termine el quiz">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="text-xl font-medium py-4 px-8 rounded-xl"
          >
            Iniciar quiz
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default StartQuiz;

