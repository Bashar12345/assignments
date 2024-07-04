import React from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, Box, Link } from '@mui/material';
import { useFormik } from 'formik';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values) => {
      const errors = {};

      // Basic validation example, add more as needed
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log('Login:', values);
      // Add your login logic here, e.g., API calls
    },
  });

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#012F41',
        padding: '0 50px',
      }}
    >
      <Box>
        <Typography variant="h2" component="h1" color="#fff" gutterBottom>
          Welcome to the first decentralised Social Network in the world
        </Typography>
        <Typography variant="body1" color="#fff" paragraph>
          We are the only decentralised social network that gives opportunity to monetise your time even if you are a normal user who doesn’t create any content and use the earning to buy any service or goods from the native marketplace.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#2AB7CA' }}>
          Register Now!
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Login to your Account
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox id="rememberMe" name="rememberMe" checked={formik.values.rememberMe} onChange={formik.handleChange} />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: '16px', backgroundColor: '#1976d2' }}
          >
            Login
          </Button>
        </form>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <Link href="#" underline="none">Forgot Password?</Link>
          <Typography variant="body2">
            Don't have an account? <Link href="#" underline="none">Sign up here</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
