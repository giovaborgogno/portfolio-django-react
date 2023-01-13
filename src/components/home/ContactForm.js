import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, TextareaAutosize } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../components/iconify';
import Textarea from '@mui/joy/Textarea';
import { send_email } from '../../redux/actions/contact';
import { connect } from 'react-redux';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const ContactForm =({send_email})=> {

    const[emailsent, setEmailsent] = useState(false)

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: '',
        message: ''
    });

    const {
        full_name,
        email,
        subject,
        message
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        send_email(
            full_name,
            email,
            subject,
            message
        )
        setEmailsent(true)
    };
    const handleClick = (e) => {
        e.preventDefault()
        send_email(
            full_name,
            email,
            subject,
            message
        )
        console.log('enviado?')
    };

    return (
        <>
        <form  onSubmit={e => onSubmit(e)}>
        
            <Stack spacing={3}>
                <TextField
                    name="full_name" label="Full name"
                    onChange={e => onChange(e)}
                    value={full_name} 
                    required/>
                <TextField
                    name="email" label="Email address"
                    onChange={e => onChange(e)}
                    value={email} 
                    required/>
                <TextField
                    name="subject" label="Subject"
                    onChange={e => onChange(e)}
                    value={subject} 
                    required/>
                <TextField
                    name="message" label="Write your message" multiline rows={4}
                    onChange={e => onChange(e)}
                    value={message} 
                    required/>

                {/* <Textarea /> */}



                {/* <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
            </Stack>



            {emailsent?
            <LoadingButton fullWidth size="large" type="submit" variant="contained"  sx={{ mt: 3 }}>
            Email sent. Thank you
        </LoadingButton>
            :
            <LoadingButton fullWidth size="large" type="submit" variant="contained"  sx={{ mt: 3 }}>
                Send message
            </LoadingButton>
            }
            

            </form>
        </>
    );
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  send_email,
})(ContactForm)