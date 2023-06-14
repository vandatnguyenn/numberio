import React, { useState, useEffect } from 'react';
import { Button, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
// import { getQuestions, deleteQuestion } from '../../api';

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([
    { id: 1, description: "Hãy tính giá trị của biểu thức: 4 x 5 - 3 x 2" },
    { id: 2, description: "Tìm số hạng chưa biết trong phép tính: 7 x 8 = ? x 8" },
    { id: 3, description: "Cho a = 12 và b = 5. Hãy tính giá trị của biểu thức: a + b - 2" },
    { id: 4, description: "Số nào lớn hơn: 3/4 hay 5/8?" },
    { id: 5, description: "Cho một tam giác vuông có độ dài cạnh góc vuông là 6 cm. Hãy tính chu vi của tam giác đó." },
    { id: 6, description: "Tìm số hạng chưa biết trong phép tính: 15 ÷ ? = 3" },
    { id: 7, description: "Tìm giá trị của x trong phương trình 2x + 5 = 15" },
    { id: 8, description: "Hãy chuyển số 25/4 thành số thập phân" },
    { id: 9, description: "Tìm giá trị của biểu thức: 3 x (4 + 2) - 5" },
    { id: 10, description: "Hãy tính diện tích của hình chữ nhật có chiều dài là 8 cm và chiều rộng là 5 cm" },
    { id: 11, description: "Tìm số hạng chưa biết trong phép tính: 64 ÷ ? = 8" },
  ]);
  

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
      <h1>Quản lý câu hỏi</h1>
      <Stack spacing={2} direction="row" alignItems="center" mb={2}>
        <Button variant="contained" component={Link} to="/adminPage">
          Thêm câu hỏi
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
                  style={{ marginRight: '8px' }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  onClick={() => handleViewStats(question.id)}
                  style={{ marginRight: '8px' }}
                >
                  View Stats
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(question.id)}
                  style={{ marginRight: '8px' }}
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
