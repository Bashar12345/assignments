// 1. First, install Formik and Yup (a validation library):

// npm install formik yup

// 2. Import Formik and Yup into your React component:

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


// 3. Define your form fields and validation schema using Yup:


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password:''

};

const validationSchema = Yup.object({
  firstName: Yup.string()
  .required('firstName is Required')
  .min(2,'Too Short').max(20,'Too Long'),

  lastName: Yup.string().required('lastName is Required')
  .min(2,'Too Short').max(20,'Too Long'),

  email: Yup.string().email('Invalid email address').required('Required'),
  
  password: Yup.string()
  .required("Password is required")
  .min(6, "Password must have at least 6 characters"),
  
  confirmPassword: Yup.string()
  .required('confirm password must be the same as the password')
  .oneOf([ Yup.ref("password"), null ],'Password does not match')

});


// 4. In your component, wrap your form fields inside a Formik component:

```
const MyForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
  >
    {({ errors, touched }) => (
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field type="text" name="lastName" />
          <ErrorMessage name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);
```

5. Finally, add any necessary styles and render the form:

```
const App = () => (
  <div className="App">
    <h1>My Form</h1>
    <MyForm />
  </div>
);
```

That's it! With Formik, you can easily handle form state and validation in your React components.