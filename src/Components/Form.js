// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Basic = () => (
  <div>
    <h1>Add the event on the map</h1>
    <Formik
      initialValues={{
        name: " ",
        desc: " ",
        date: "",
        owner: "",
      }}
      validate={(values) => {}}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(async () => {
          console.log("yo");

          //console.log(json.stringify(values));
          //add to db
          try {
            let data = await axios.post("/api/event", values);
          } catch (err) {
            console.log(err);
          }

          console.log(values);
          //  alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <p>Name of the event</p>
          <Field type="text" name="name" placeholder="Name of the event" />
          <ErrorMessage name="name" component="div" />

          <p>What is the event about?</p>
          <Field type="text" name="desc" placeholder="Description" />
          <ErrorMessage name="desc" component="div" />

          <p>When is the event taking place?</p>
          <Field type="datetime-local" name="date" />
          <ErrorMessage name="date" component="div" />

          <p>Organizer name</p>
          <Field type="text" name="owner" placeholder="Host" />
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
