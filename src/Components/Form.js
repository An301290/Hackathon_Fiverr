// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Basic = () => (
  <div>
    <h1 class="block uppercase tracking-wide text-black-800 text-m font-bold mb-2">
      Add the event on the map
    </h1>
    <h1>"{sessionStorage.getItem("lastLat")}"</h1>
    <h1>"{sessionStorage.getItem("lastLng")}"</h1>
    <Formik
      initialValues={{
        name: " ",
        desc: " ",
        date: "",
        owner: "",
        lat: sessionStorage.getItem("lastLat"),
        lng: sessionStorage.getItem("lastLng"),
      }}
      validate={(values) => {}}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(async () => {
          console.log("yo");
          console.log(sessionStorage.getItem("lastLat"));
          console.log(sessionStorage.getItem("lastLng"));

          //console.log(json.stringify(values));
          //add to db
          try {
            let data = await axios.post("/api/event", values);
            axios.post("/api/event");
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
        <div class="flex-1  text-center bg-green-300 px-4 py-2 m-2">
          <Form>
            <p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name of the event
            </p>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />

            <p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              What is the event about?
            </p>
            <Field type="text" name="desc" placeholder="Description" />
            <ErrorMessage name="desc" component="div" />

            <p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              When is the event taking place?
            </p>
            <Field type="datetime-local" name="date" />
            <ErrorMessage name="date" component="div" />
            <span></span>
            <p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Organizer name
            </p>
            <Field type="text" name="owner" placeholder="Host" />
            <ErrorMessage name="name of the event" component="div" />
            <span></span>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

export default Basic;
