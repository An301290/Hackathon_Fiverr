// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Basic = () => (
  <div>
    <h1>Add the event on the map</h1>
    <Formik
      initialValues={{
        "Name of the event": " ",
        Description: " ",

        Owner: "",
      }}
      validate={(values) => {}}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          console.log(values);
          //add to db
          axios({
            method: "POST",
            url: "localhost:8000/api/event",
            data: values,
          });
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <p>Name of the event</p>
          <Field
            type="text"
            name="Name of the event"
            placeholder="Name of the event"
          />
          <ErrorMessage name="name of the event" component="div" />
          <p>What is the event about?</p>
          <Field type="text" name="Description" placeholder="Description" />
          <ErrorMessage name="description" component="div" />
          <p>When is the event taking place?</p>
          <Field type="date" name="Starting" />
          <ErrorMessage name="date" component="div" />
          <p>Organizer name</p>
          <Field type="text" name="Owner" placeholder="Host" />
          <ErrorMessage name="name of the event" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
