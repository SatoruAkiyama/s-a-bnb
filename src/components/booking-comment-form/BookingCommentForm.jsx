import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const BookingCommentForm = ({ booking }) => {
  const now = new Date();
  const day = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    date: day,
  });

  const { name, email, comment } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e, url) => {
    e.preventDefault();
    await axios
      .post(`https://fir-a-bnb.firebaseio.com/comment${url}.json`, formData)
      .then(() => {
        swal({
          title: "Your comment has been sent.",
          icon: "success",
        });
      })
      .then(() =>
        setFormData({
          ...formData,
          name: "",
          email: "",
          comment: "",
        })
      )
      .catch((e) => {
        swal({
          title: e.message,
          icon: "success",
        });
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, booking.venueData.id)}>
      <input
        name="name"
        value={name}
        type="text"
        placeholder="Name"
        required
        onChange={handleChange}
      />
      <input
        name="email"
        value={email}
        type="email"
        placeholder="Email"
        required
        onChange={handleChange}
      />
      <textarea
        name="comment"
        value={comment}
        type="text"
        placeholder="Subject"
        required
        onChange={handleChange}
        className="textarea"
      />
      <div className="center">
        <button
          className="btn-large waves-effect waves-light  red accent-3"
          type="submit"
          name="action"
          style={{
            color: `#fff`,
            width: `147px`,
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BookingCommentForm;
