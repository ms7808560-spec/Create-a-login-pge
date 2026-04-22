import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted ✅");
    console.log(formData);
  };

  return (
    <Container>
      <FormCard>
        <Title>Sign Up</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <Button type="submit">Create Account</Button>
        </Form>
      </FormCard>
    </Container>
  );
}

export default App;





/* ===== Styled Components ===== */

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

const FormCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 12px;
  border: none;
  background: #667eea;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;