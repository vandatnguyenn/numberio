import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Link } from "react-router-dom"

const AddQuestion = (props) => {
    const [description, setDescription] = useState('');
    const [trueAnswer, setTrueAnswer] = useState('');
    const [wrongAnswer1, setWrongAnswer1] = useState('');
    const [wrongAnswer2, setWrongAnswer2] = useState('');
    const [wrongAnswer3, setWrongAnswer3] = useState('');
    
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
            description: description, 
            trueAnswer: trueAnswer, 
            wrongAnswer: [wrongAnswer1, wrongAnswer2, wrongAnswer3]
        };
        console.log(payload);
    }
    
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
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <TextField
                            id="outlined-multiline-static"
                            type="text"
                            color='secondary'
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
                            <TrueAnswerCssTextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="True answer"
                                onChange={e => setTrueAnswer(e.target.value)}
                                value={trueAnswer}
                                required
                                sx={{width: "39%", mr: 3}}
                            />
                            <WrongAnswerCssTextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Wrong answer"
                                onChange={e => setWrongAnswer1(e.target.value)}
                                value={wrongAnswer1}
                                required
                                sx={{width: "39%"}}
                            />
                        </div>
                        <br/>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <WrongAnswerCssTextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Wrong answer"
                                onChange={e => setWrongAnswer2(e.target.value)}
                                value={wrongAnswer2}
                                required
                                sx={{width: "39%", mr: 3}}
                            />
                            <WrongAnswerCssTextField
                                type="text"
                                variant='outlined'
                                color='secondary'
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