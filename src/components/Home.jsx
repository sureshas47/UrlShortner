// Render Prop
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [url, setUrl] = useState(null);

  return (
    <>
      <Container>
        <Row>
          <Col className="text-center my-5">
            <h1>URL SHORTNER</h1>
          </Col>
        </Row>

        <Row>
          <Col className="text-center my-5">
            <Formik
              initialValues={{ url: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.url) {
                  errors.url = "Required";
                }
                //   else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //   ) {
                //     errors.email = "Invalid email address";
                //   }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                //   setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                //   }, 400);

                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

                const api = axios.create({
                  baseURL: "http://localhost:4000",
                  timeout: 3000,
                  headers: { "X-Custom-Header": "foobar" },
                });

                const response = await api.post("/create", values);
                setUrl(response.data.data);
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form>
                  <Field className="form-control" type="text" name="url" />
                  <ErrorMessage
                    className="text-danger"
                    name="url"
                    component="div"
                  />
                  <Button
                    className="btn btn-lg btn-primary mt-3"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Generate URL
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {" "}
            <a className="mt-3" href={url}>
              {url}
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
