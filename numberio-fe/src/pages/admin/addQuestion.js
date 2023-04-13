import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"

const AddQuestion = (props) => {
    const [description, setDescription] = useState('');
    const [trueAnswer, setTrueAnswer] = useState('');
    const [wrongAnswer1, setWrongAnswer1] = useState('');
    const [wrongAnswer2, setWrongAnswer2] = useState('');
    const [wrongAnswer3, setWrongAnswer3] = useState('');
    
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(description, trueAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3);
    }
    
    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
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
                        sx={{mb: 4, width: "80%"}}
                    />
                </div>
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="True answer"
                            onChange={e => setTrueAnswer(e.target.value)}
                            value={trueAnswer}
                            required
                            sx={{width: "35%", mr: 8}}
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Wrong answer"
                            onChange={e => setWrongAnswer1(e.target.value)}
                            value={wrongAnswer1}
                            required
                            sx={{width: "35%"}}
                        />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Wrong answer"
                            onChange={e => setWrongAnswer2(e.target.value)}
                            value={wrongAnswer2}
                            required
                            sx={{width: "35%", mr: 8}}
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Wrong answer"
                            onChange={e => setWrongAnswer3(e.target.value)}
                            value={wrongAnswer3}
                            required
                            sx={{width: "35%"}}
                        />
                    </div>
                </div>
                <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button variant="outlined" color="secondary" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default AddQuestion;