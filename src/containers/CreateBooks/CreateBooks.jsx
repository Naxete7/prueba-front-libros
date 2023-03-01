import React from "react";
import './CreateBooks.css';
import { Button, Form } from "antd";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CreateBooks.css"

const CreateBooks = () => {
    return (
      <Container className="  homeStyle">
        <Row className=" d-flex justify-content-center mb-5 mt-2">
          <Col className=" d-flex justify-content-center ">
            <br></br>
            <Card className="cardDesign d-flex align-items-center">
              <Form
                labelCol={{
                  span: 12
                }}
                wrapperCol={{
                  span: 50
                }}
                initialValues={{
                  remember: true
                }}
              >
                <h1 className=" mb-3 ">Crear Libro</h1>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Isbn!"
                    }
                  ]}
                >
                  <input type="text" name="Isbn" placeholder="Isbn" />
                </Form.Item>

                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input  Title!"
                    }
                  ]}
                >
                  <input type="text" name="Title" placeholder="Title" />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input Subtitle!"
                    }
                  ]}
                >
                  <input type="text" name="Subtitle" placeholder="Subtitle" />
                </Form.Item>

                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Author!"
                    }
                  ]}
                >
                  <input type="text" name="Author" placeholder="Author" />
                </Form.Item>

                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Published!"
                    }
                  ]}
                >
                  <input type="text" name="Published" placeholder="Published" />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Publisher!"
                    }
                  ]}
                >
                  <input type="text" name="Publisher" placeholder="Publisher" />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Pages!"
                    }
                  ]}
                >
                  <input type="text" name="Pages" placeholder="Pages" />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Description!"
                    }
                  ]}
                >
                  <input
                    type="text"
                    name="Description"
                    placeholder="Description"
                  />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Website!"
                    }
                  ]}
                >
                  <input type="text" name="Website" placeholder="Website" />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input Category!"
                    }
                  ]}
                >
                  <input type="text" name="Category" placeholder="Category" />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 2,
                    span: 16
                  }}
                >
                  <Button
                    className="buttonDesign d-flex  justify-content-center align-item-center col-8  "
                    type="primary"
                    htmlType="submit"
                  >
                    Crear
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
export default CreateBooks;