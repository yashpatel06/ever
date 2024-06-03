/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header";
import Banner from "../../assets/evermarkbg.jpg";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Textarea } from "@mui/joy";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hook/ScrollTop";
import { countries } from "../../utils/CountryArray";
import emailjs from "@emailjs/browser";

const OfferLand = () => {
  const { values, handleChange, handleSubmit, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        googleMapLink: "",
        phoneCode: {
          label: "",
          code: "",
          phone: "",
        },
        landZone: "",
        fSI: "",
        landSize: "",
        moreInformation: "",
        phone: "",
        youAre: "",
        proposeLandType: "",
        isAgri: "",
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
            "service_b82sbzf",
            "template_dmqsb6l",
            form,
            "Y4GJZaIiIA2Jw2efq"
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
                    </div>

                    <div className="flex flex-col  gap-5 max-md:w-full ">
                      <div className="flex gap-2">
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
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                          You are ?
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          //   defaultValue="owner"
                          name="youAre"
                        >
                          <div className="flex">
                            <FormControlLabel
                              value="owner"
                              control={<Radio />}
                              onChange={() => {
                                setFieldValue("youAre", "Owner");
                              }}
                              label="Owner"
                              className="text-black"
                            />
                            <FormControlLabel
                              value="broker"
                              control={<Radio />}
                              onChange={() => {
                                setFieldValue("youAre", "Broker");
                              }}
                              label="Broker"
                              className="text-black"
                            />
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <TextField
                        name="googleMapLink"
                        type="text"
                        label="Google Map Location Link"
                        value={values?.googleMapLink}
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
                      <FormGroup>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Propose Land Type
                        </FormLabel>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={values.proposeLandType.includes(
                                "Outright Sale"
                              )}
                              onChange={() => {
                                const currentIndex =
                                  values.proposeLandType.indexOf(
                                    "Outright Sale"
                                  );
                                const newProposeLandType = [
                                  ...values.proposeLandType,
                                ];

                                if (currentIndex === -1) {
                                  newProposeLandType.push("Outright Sale");
                                } else {
                                  newProposeLandType.splice(currentIndex, 1);
                                }

                                setFieldValue(
                                  "proposeLandType",
                                  newProposeLandType
                                );
                              }}
                            />
                          }
                          label="Outright Sale"
                          className="text-black"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={values.proposeLandType.includes(
                                "Joint Development"
                              )}
                              onChange={() => {
                                const currentIndex =
                                  values.proposeLandType.indexOf(
                                    "Joint Development"
                                  );
                                const newProposeLandType = [
                                  ...values.proposeLandType,
                                ];

                                if (currentIndex === -1) {
                                  newProposeLandType.push("Joint Development");
                                } else {
                                  newProposeLandType.splice(currentIndex, 1);
                                }

                                setFieldValue(
                                  "proposeLandType",
                                  newProposeLandType
                                );
                              }}
                            />
                          }
                          label="Joint Development"
                          className="text-black"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={values.proposeLandType.includes(
                                "Long Lease"
                              )}
                              onChange={() => {
                                const currentIndex =
                                  values.proposeLandType.indexOf("Long Lease");
                                const newProposeLandType = [
                                  ...values.proposeLandType,
                                ];

                                if (currentIndex === -1) {
                                  newProposeLandType.push("Long Lease");
                                } else {
                                  newProposeLandType.splice(currentIndex, 1);
                                }

                                setFieldValue(
                                  "proposeLandType",
                                  newProposeLandType
                                );
                              }}
                            />
                          }
                          label="Long Lease"
                          className="text-black"
                        />
                      </FormGroup>
                      <div className="flex flex-col md:flex-row gap-2">
                        <TextField
                          type="text"
                          name="landZone"
                          value={values?.landZone}
                          label="Land Zone"
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
                        <TextField
                          type="text"
                          name="fSI"
                          value={values?.fSI}
                          label="FSI"
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
                        type="text"
                        name="landSize"
                        value={values?.landSize}
                        label="Land Size In Yard"
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
                    <Textarea
                      minRows={3}
                      label="More Information"
                      placeholder="More Information"
                      onChange={handleChange}
                      name="moreInformation"
                      value={values?.moreInformation}
                      className="p-3 border-0 rounded-md max-w-full mb-4 h-32"
                    />
                    <FormGroup>
                      <div className="flex items-center">
                        <Checkbox
                          name="isAgri"
                          onChange={handleChange}
                          value={values.isAgri}
                        />
                        <FormLabel id="demo-radio-buttons-group-label">
                          Is Land Non Agriculture ?
                        </FormLabel>
                      </div>
                    </FormGroup>

                    <button
                      type="submit"
                      className="bg-[#325131] text-white font-semibold py-3 px-6 rounded-md border-0 shadow-none cursor-pointer "
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Offer A Land</h2>

                  <div className="mb-4">
                    <p className="text-[16px]">
                      Shivalik has built more than 75+ landmark projects since
                      1998 & having a presence in almost every area of Ahmedabad
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[16px]">
                      We are currently looking for prominent land parcels across
                      the city for our upcoming landmark.
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[16px]">
                      Interested in offering your land? Please fill out the form
                      below, and we'll be in touch once we receive your
                      submission.
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

export default OfferLand;
