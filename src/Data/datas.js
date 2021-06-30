import axios from "axios";


async function data() {
  try {
    const response = await axios.get('/api/events');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}


const countries = [
  {
    city: "Berlin",
    lat: 52.5167,
    lng: 13.3833,

  },
];

export default countries;
