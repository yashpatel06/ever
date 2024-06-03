/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header";
import Banner from "../../assets/evermarkbg.jpg";
import {
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hook/ScrollTop";
import { countries } from "../../utils/CountryArray";
import { Textarea } from "@mui/joy";

const ShareFeedback = () => {
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      feedBackType: "",
      phoneCode: {
        label: "",
        code: "",
        phone: "",
      },
      comment: "",
    },
    onSubmit: (value) => {
      console.log(value, "CONTACTUS");
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
                  {/* <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2> */}

                  <form
                    className="flex flex-col gap-5 md:gap-2 bg-white p-10 rounded-lg"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    <div className="flex flex-col w-full gap-5">
                      <TextField
                        label="Name"
                        type="text"
                        name="name"
                        value={values?.name}
                        onChange={handleChange}
                        className="p-3 border-0 rounded-md md:w-full bg-white w-full"
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
                          //   maxWidth: "370px",
                        }}
                      />
                      <div className="flex flex-col md:flex-row gap-2">
                        <Autocomplete
                          name="phoneCode"
                          onChange={(e, newvalue) => {
                            console.log(newvalue, "setFieldValue");
                            setFieldValue("phoneCode.phone", newvalue?.phone);
                            setFieldValue("phoneCode.label", newvalue?.label);
                            setFieldValue("phoneCode.code", newvalue?.code);
                          }}
                          value={values?.phoneCode?.phone}
                          id="country-select-demo"
                          sx={{ width: 300 }}
                          options={countries}
                          autoHighlight
                          getOptionLabel={() =>
                            values?.phoneCode?.code &&
                            `${values?.phoneCode?.phone}  (${values?.phoneCode?.code}) ${values?.phoneCode?.label}`
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              <img
                                loading="lazy"
                                width="20"
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                alt=""
                              />
                              {option.label} ({option.code}) +{option.phone}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="PhoneCode"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password", // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                        <TextField
                          type="text"
                          label="Contact No."
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
                            //   maxWidth: "370px",
                          }}
                        />
                      </div>
                      <TextField
                        name="email"
                        type="email"
                        label="Email"
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
                          //   maxWidth: "370px",
                        }}
                      />
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Feedback Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="feedBackType"
                          value={values?.feedBackType}
                          label="Feedback Type"
                          onChange={handleChange}
                        >
                          <MenuItem value={"Application"}>Application</MenuItem>
                          <MenuItem value={"Website"}>Website</MenuItem>
                          <MenuItem value={"Complaint"}>Complaint</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <Textarea
                      minRows={3}
                      label="Comment"
                      placeholder="Comment"
                      onChange={handleChange}
                      name="comment"
                      value={values?.comment}
                      className="p-3 border-0 rounded-md max-w-full mb-4 h-32"
                    />
                    <button
                      type="submit"
                      className="bg-[#325131] text-white font-semibold py-3 px-6 rounded-md border-0 shadow-none cursor-pointer "
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Share Feedback
                  </h2>

                  <div className="mb-4">
                    <p className="text-[16px]">
                      Your feedback is invaluable to us!
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[16px]">
                      We're dedicated to providing the best possible experience
                      for you, and your feedback is important for us to improve.
                      Please take a moment to share your thoughts with us. Your
                      input helps us shape our services to better meet your
                      needs.
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[16px]">
                      Thank you for being a valued part of our community.
                    </p>
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

export default ShareFeedback;
