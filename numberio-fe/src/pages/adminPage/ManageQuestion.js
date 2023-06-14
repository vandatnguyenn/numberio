import React, { useState, useEffect } from 'react';
import { Button, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
// import { getQuestions, deleteQuestion } from '../../api';

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {

  }, []);

  const handleDelete = (questionId) => {

  };

  const handleEdit = (questionId) => {

  };

  const handleViewStats = (questionId) => {

  };

  return (
    <Container>
      <h1>Manage Questions</h1>
      <Stack spacing={2} direction="row" alignItems="center" mb={2}>
        <Button variant="contained" component={Link} to="/add-question">
          Add Question
        </Button>
      </Stack>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.description}</td>
              <td>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEdit(question.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  onClick={() => handleViewStats(question.id)}
                >
                  View Stats
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(question.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ManageQuestions;
