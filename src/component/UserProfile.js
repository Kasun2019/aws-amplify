
import React, { useEffect, useState } from 'react';
import { Form, Button, Dropdown,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


const UserProfile = (props) => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [dob, setDob] = useState('');
  const userId = props.props;

  const [newQuotes, setnewQuotes] = useState('');


  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
        const response = await fetch('http://localhost:8080/putDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': 86400,
          },
          body: JSON.stringify({
            name: name,
            gender: gender,
            type: type,
            dob: dob,
            users:userId
          }),
        });

        const data = await response.json();
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error);
      }
  };
  const getNewQuotes =  async (e) =>{

    try
    {
      const response = await fetch('http://localhost:8080/details/Entrepreneur', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': 86400,
        }
      });

      const data = await response.json();
      console.log('Response:', data);
      setnewQuotes(data.data);
    }
    catch(error)
    {
      console.error('Error:', error);
    }

  }

  useEffect(()=>{
    getNewQuotes();
  })

  return (
    <div className='cart'>
    <div className='left-section'>
        <h4>{newQuotes}</h4>
          <label>New Quotes Generator</label>
    </div>
    <div className='right-section'>
      
    <Form onSubmit={handleSubmit}>
      
      <Form.Group as={Row} controlId="formName">
        <Form.Label column sm={2}>Name</Form.Label>
        <Col sm={10}>
            <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formGender">
        <Form.Label column sm={2}>Gender</Form.Label>
        <Col sm={10}>
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-gender">
            {gender ? gender : 'Select Gender'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => { setGender('Male'); } }>Male</Dropdown.Item>
            <Dropdown.Item onClick={() => { setGender('Female'); }}>Female</Dropdown.Item>
            <Dropdown.Item onClick={() => setGender('Other')}>Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formType">
        <Form.Label column sm={2}>Type</Form.Label>
        <Col sm={10}>
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-type">
            {type || 'Select Type'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => setType('Entrepreneur')}>Entrepreneur</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Software Engineer')}>Software Engineer</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Marketing Manager')}>Marketing Manager</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Financial Analyst')}>Financial Analyst</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Graphic Designer')}>Graphic Designer</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Sales Representative')}>Sales Representative</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Project Manager')}>Project Manager</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Human Resources Specialist')}>Human Resources Specialist</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Customer Service Representative')}>Customer Service Representative</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Data Scientist')}>Data Scientist</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Operations Manager')}>Operations Manager</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Content Creator')}>Content Creator</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Product Manager')}>Product Manager</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Accountant')}>Accountant</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Quality Assurance Engineer')}>Quality Assurance Engineer</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Business Development Manager')}>Business Development Manager</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Legal Counsel')}>Legal Counsel</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Research Scientist')}>Research Scientist</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Healthcare Professional')}>Healthcare Professional</Dropdown.Item>
          <Dropdown.Item onClick={() => setType('Teacher/Educator')}>Teacher/Educator</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formDob">
        <Form.Label column sm={2}>Date of Birth</Form.Label>
        <Col sm={10}>
        <Form.Control
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        </Col>
      </Form.Group>
      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
};

export default UserProfile;

