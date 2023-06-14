import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Link, useHref } from "react-router-dom"
// import { addQuestion } from '../../api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import './addQuestion.css'

const AddQuestion = (props) => {
  
  const navigate = useNavigate();

  const [description, setDescription] = useState('');
  const [trueAnswer, setTrueAnswer] = useState('');
  const [wrongAnswer1, setWrongAnswer1] = useState('');
  const [wrongAnswer2, setWrongAnswer2] = useState('');
  const [wrongAnswer3, setWrongAnswer3] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [questionType, setQuestionType] = useState("Trắc nghiệm nhiều đáp án");
  
  const TrueAnswerCssTextField = styled(TextField)({
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'light gray',
        },
        '&:hover fieldset': {
          borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
  });

  const WrongAnswerCssTextField = styled(TextField)({
      '& label.Mui-focused': {
        color: 'red',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'red',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'light gray',
        },
        '&:hover fieldset': {
          borderColor: 'red',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'red',
        },
      },
  });

  function handleSubmit(event) {
    // event.preventDefault();
    // const payload = {
    //   Description: description, 
    //   Answers: trueAnswer, 
    //   WrongAnswers: [wrongAnswer1, wrongAnswer2, wrongAnswer3],
    //   Difficulty: difficulty
    // };
    // try {
    //   addQuestion(payload).then((res) => console.log(res));
    //   console.log(payload);
    // }catch(err) {
    //   throw new Error(err);
    // }
    
  }

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleChange_questionType = (event) => {
    setQuestionType(event.target.value);
  };
  
  return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
      }}>
          {/* <h2>ADD QUESTION</h2> */}
          <div style={{
            width: "90%",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
          }}>
              <form 
                onSubmit={handleSubmit} 
                sx={{mt: 4, mb: 4}}    
              >
                <div className='row' style={{display: "flex", margin: "50px 0 0 10%"}}>
                  <h3 style={{width: "10%"}}>Dạng câu hỏi:</h3>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={questionType}
                    label="Question Type"
                    onChange={handleChange_questionType}
                    sx={{width: "20%"}}
                  >
                    <MenuItem value={"Trắc nghiệm nhiều đáp án"}>Trắc nghiệm nhiều đáp án</MenuItem>
                  </Select>
                </div>
                <div className='row' style={{display: "flex", margin: "10px 0 0 10%"}}>
                  <h3 style={{width: "10%"}}>Độ khó:</h3>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={difficulty}
                    label="Difficulty"
                    onChange={handleChange}
                    sx={{width: "20%"}}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </div>
                  
                <div style={{display: "flex", margin: "10px 0 0 10%"}}>
                  <h3 style={{width: "10%"}}>Câu hỏi:</h3>
                  <TextField
                      id="outlined-multiline-static"
                      type="text"
                      color='success'
                      label="Description"
                      onChange={e => setDescription(e.target.value)}
                      value={description}
                      fullWidth
                      required
                      multiline
                      rows={4}
                      sx={{mt: 2, mb: 2, width: "80%"}}
                  />
                </div>
                
                <div style={{display: "flex", margin: "10px 0 0 10%"}}>
                  <h3 style={{width: "10%"}}>Câu trả lời:</h3>
                  <TextField
                      type="text"
                      variant='outlined'
                      color='success'
                      label="True answer"
                      onChange={e => setTrueAnswer(e.target.value)}
                      value={trueAnswer}
                      required
                      sx={{width: "60%", mr: 3}}
                  />
                </div>
                <div style={{display: "flex", margin: "10px 0 0 10%"}}>
                  <h3 style={{width: "10%"}}></h3>
                  <TextField
                      type="text"
                      variant='outlined'
                      color='warning'
                      label="Wrong answer"
                      onChange={e => setWrongAnswer1(e.target.value)}
                      value={wrongAnswer1}
                      required
                      sx={{width: "60%"}}
                  />
                </div>
                <div style={{display: "flex", margin: "10px 0 0 10%"}}>
                  <h3 style={{width: "10%"}}></h3>
                  <TextField
                    type="text"
                    variant='outlined'
                    color='warning'
                    label="Wrong answer"
                    onChange={e => setWrongAnswer2(e.target.value)}
                    value={wrongAnswer2}
                    required
                    sx={{width: "60%", mr: 3}}
                  />
                </div>
                <div style={{display: "flex", margin: "10px 0 0 10%"}}>
                  <h3 style={{width: "10%"}}></h3>
                  <TextField
                    type="text"
                    variant='outlined'
                    color='warning'
                    label="Wrong answer"
                    onChange={e => setWrongAnswer3(e.target.value)}
                    value={wrongAnswer3}
                    required
                    sx={{width: "60%"}}
                  />
                </div>
                <br/>
                <div style={{display: "flex", margin: "10px 0 50px 10%"}}>
                  <h3 style={{width: "10%"}}></h3>
                  <Button className="saveButton" variant="outlined" color="success" type="submit">
                    Lưu câu hỏi
                  </Button>
                  <Button className="cancelButton" variant="outlined" color="error" onClick={() => {navigate('/dashboard')}}>
                    Huỷ
                  </Button>
                  <Button className="manageButton" variant="outlined" color="info" onClick={() => {navigate('/manageQuestion')}}>
                    Quản lý câu hỏi
                  </Button>
                </div>
              </form>
          </div>
      </div>
  );
}

export default AddQuestion;