import { useFormik } from "formik";
import Banner from "../../assets/evermarkbg.jpg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../hook/ScrollTop";
import { TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    onSubmit: (value) => {
      console.log(value, "CONTACTUS");
      const form = document.createElement("form");

      // Append form fields with values from Formik
      Object.keys(values).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = values[key];
        form.appendChild(input);
      });

      // Append the form to the document body
      document.body.appendChild(form);
      emailjs
        .sendForm(
          "service_e12xe2r",
          "template_k5e2ysg",
          form,
          "aAcs85ETEtw5SQ4yM"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            resetForm();
          },
          (error) => {
            console.log("FAILED...", error.text);
            resetForm();
          }
        );
    },
  });

  return (
    <>
      <div className="relative bg-white text-white">
        <img
          src={Banner}
          alt="Background image of skyscrapers"
          className="absolute inset-0 overflow-clip  w-full h-full "
          // className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%]"
          // style={{
          //   left: "50%",
          // }}
        />
        <div className="relative mx-auto px-6 py-1 xl:ml-10">
          <Header />

          <div className="bg-[#325131] shadow-md rounded-lg overflow-hidden my-10">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="max-w-full">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

                  <form
                    className="flex flex-col gap-5 md:gap-2 bg-white p-10 rounded-lg"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-5">
                      <TextField
                        label="Name"
                        type="text"
                        name="name"
                        value={values?.name}
                        onChange={handleChange}
                        className="p-3 border-0 rounded-md md:w-full bg-white"
                        sx={{
                          "& .Mui-focused": {
                            color: "#6386AD",
                            backgroundColor: "white",
                            // input: { color: "red" },
                          },
                          backgroundColor: "#F6F6F6",
                          outline: "none",
                          color: "#6386ad",
                          borderRadius: "8px",
                          borderColor: "#325131",
                          border: "none",
                          maxWidth: "370px",
                        }}
                      />

                      <TextField
                        type="email"
                        placeholder="Email"
                        name="email"
                        label="email"
                        value={values?.email}
                        onChange={handleChange}
                        className="p-3 border-0 rounded-md md:w-full bg-white"
                        sx={{
                          "& .Mui-focused": {
                            color: "#6386AD",
                            backgroundColor: "white",
                            // input: { color: "red" },
                          },
                          backgroundColor: "#F6F6F6",
                          outline: "none",
                          color: "#6386ad",
                          borderRadius: "8px",
                          borderColor: "#325131",
                          border: "none",
                          maxWidth: "370px",
                        }}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 max-md:w-full ">
                      <TextField
                        type="text"
                        placeholder="Phone"
                        label="contact no"
                        name="phone"
                        value={values?.phone}
                        onChange={handleChange}
                        className="p-3 border-0 rounded-md md:w-full bg-white"
                        sx={{
                          "& .Mui-focused": {
                            color: "#6386AD",
                            backgroundColor: "white",
                            // input: { color: "red" },
                          },
                          backgroundColor: "#F6F6F6",
                          outline: "none",
                          color: "#6386ad",
                          borderRadius: "8px",
                          borderColor: "#325131",
                          border: "none",
                          maxWidth: "370px",
                        }}
                      />
                      <TextField
                        type="text"
                        name="subject"
                        value={values?.subject}
                        label="subject"
                        onChange={handleChange}
                        placeholder="Subject"
                        className="p-3 border-0 rounded-md md:w-full bg-white"
                        sx={{
                          "& .Mui-focused": {
                            color: "#6386AD",
                            backgroundColor: "white",
                            // input: { color: "red" },
                          },
                          backgroundColor: "#F6F6F6",
                          outline: "none",
                          color: "#6386ad",
                          borderRadius: "8px",
                          borderColor: "#325131",
                          border: "none",
                          maxWidth: "370px",
                        }}
                      />
                    </div>
                    <Textarea
                      minRows={3}
                      label="Your Message"
                      placeholder="Your Message"
                      onChange={handleChange}
                      name="message"
                      value={values?.message}
                      className="p-3 border-0 rounded-md max-w-full mb-4 h-32"
                    />
                    <button
                      type="submit"
                      className="bg-[#325131] text-white font-semibold py-3 px-6 rounded-md border-0 shadow-none cursor-pointer "
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

                  <div className="mb-4">
                    <h3 className="font-semibold text-[#D7DE96]">Address</h3>
                    <p className="text-[16px]">
                      E-166, 2nd Floor, Electronic Estate, Sector 26 G.I.D.C.
                      Gandhinagar. GUJARAT 382028 INDIA
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-[#D7DE96]">Phone</h3>
                    <p className="text-[16px]">00 91 90999 43000</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-[#D7DE96]">E-mail</h3>
                    <p className="text-[16px]">evermarkinfra@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactUs;
