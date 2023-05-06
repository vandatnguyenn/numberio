import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Link } from "react-router-dom"
import { addQuestion } from '../../api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddQuestion = (props) => {
    const [description, setDescription] = useState('');
    const [trueAnswer, setTrueAnswer] = useState('');
    const [wrongAnswer1, setWrongAnswer1] = useState('');
    const [wrongAnswer2, setWrongAnswer2] = useState('');
    const [wrongAnswer3, setWrongAnswer3] = useState('');
    const [difficulty, setDifficulty] = useState(1);
    
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
      event.preventDefault();
      const payload = {
        Description: description, 
        Answers: trueAnswer, 
        WrongAnswers: [wrongAnswer1, wrongAnswer2, wrongAnswer3],
        Difficulty: difficulty
      };
      try {
        addQuestion(payload).then((res) => console.log(res));
        console.log(payload);
      }catch(err) {
        throw new Error(err);
      }
      
    }

    const handleChange = (event) => {
      setDifficulty(event.target.value);
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
                    <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={difficulty}
                      label="Difficulty"
                      onChange={handleChange}
                      sx={{width: "20%"}}
                    >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                    </Select>
                    <div style={{display: "flex", justifyContent: "center"}}>
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
                    <div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='success'
                                label="True answer"
                                onChange={e => setTrueAnswer(e.target.value)}
                                value={trueAnswer}
                                required
                                sx={{width: "39%", mr: 3}}
                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='warning'
                                label="Wrong answer"
                                onChange={e => setWrongAnswer1(e.target.value)}
                                value={wrongAnswer1}
                                required
                                sx={{width: "39%"}}
                            />
                        </div>
                        <br/>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='warning'
                                label="Wrong answer"
                                onChange={e => setWrongAnswer2(e.target.value)}
                                value={wrongAnswer2}
                                required
                                sx={{width: "39%", mr: 3}}
                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='warning'
                                label="Wrong answer"
                                onChange={e => setWrongAnswer3(e.target.value)}
                                value={wrongAnswer3}
                                required
                                sx={{width: "39%"}}
                            />
                        </div>
                        {/* <TrueAnswerCssTextField label="Custom CSS" id="custom-css-outlined-input" /> */}
                        {/* <WrongAnswerCssTextField label="Custom CSS" id="custom-css-outlined-input" /> */}
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button variant="outlined" color="secondary" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddQuestion;