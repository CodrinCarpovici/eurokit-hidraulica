import React, { useState } from "react";
import "./Contact.scss";

import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_h7OwgQ6JlnhRoFVB9O39n";
  {
    /*NEEDS CHANGING */
  }

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Formularul a fost trimis cu succes! Vă vom contacta în curând."
        );
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  };

  return (
    <div id="contact">
      <div className="contact-wrapper">
        <div className="text-center">
          <div className="d-flex justify-content-center my-5">
            <h1 className="contact-header">Contact</h1>
          </div>
          <p>
            Ne puteti contacta la numarul de telefon:{" "}
            <a href="tel:40722111051">+40 722 111 051</a> și la adresa de
            e-mail:{" "}
            <a href="mailto:eurokithidronechita@gmail.com">
              eurokithidronechita@gmail.com
            </a>
          </p>
          <p>Alternativ vă rugăm să completați formularul de mai jos.</p>

          <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-1">
              <div className="col-lg-6 col-xs-12">
                {/* NAME INPUT */}
                <div className="text-center">
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Nume"
                    name="name"
                    {...register("name", {
                      required: true,
                      maxLength: 25,
                    })}
                  />
                  <div className="line"></div>
                </div>
                {errors.name && errors.name.type === "required" && (
                  <span className="error-message" role="alert">
                    Vă rugăm să introduceți numele dvs
                  </span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <span className="error-message" role="alert">
                    Lungimea maximă a fost depășită
                  </span>
                )}
                {/* PHONE INPUT */}
                <div className="text-center">
                  <input
                    id="text"
                    type="text"
                    className="form-control"
                    placeholder="Număr de Telefon (Opțional)"
                    name="phone"
                    {...register("phone", {
                      required: false,
                    })}
                  />
                  <div className="line"></div>
                </div>

                {/* EMAIL INPUT */}
                <div className="text-center">
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  <div className="line"></div>
                </div>

                {errors.email && errors.email.type === "required" && (
                  <span className="error-message" role="alert">
                    Vă rugăm să adăugați adresa dvs. de e-mail
                  </span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="error-message" role="alert">
                    Adresă de e-mail invalidă
                  </span>
                )}

                {/* SUBJECT INPUT */}
                <div className="text-center">
                  <input
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Produs"
                    name="subject"
                    {...register("subject", {
                      required: true,
                    })}
                  />
                  <div className="line"></div>
                </div>
                {errors.subject && errors.subject.type === "required" && (
                  <span className="error-message" role="alert">
                    Ați uitat să adăugați subiectul
                  </span>
                )}
              </div>
              <div className="col-lg-6 col-xs-12">
                {/* DESCRIPTION */}
                <div className="text-center">
                  <textarea
                    id="description"
                    input="text"
                    className="form-control"
                    placeholder="Descriere..."
                    name="description"
                    {...register("description", {
                      required: true,
                    })}
                  ></textarea>
                  <div className="line"></div>
                </div>
                {errors.description && errors.description.type === "required" && (
                  <span className="error-message" role="alert">
                    Vă rugăm să adăugați o descriere a interesului dvs
                  </span>
                )}

                <button className="contact-btn" type="submit">
                  Trimite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
