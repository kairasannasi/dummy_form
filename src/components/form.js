import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { InlineWidget } from "react-calendly";

import { BsArrowLeftCircleFill } from "react-icons/bs";
function FeedbackForm() {
  const [displayform, setDisplay] = useState(true);
  const [newCustomerName, setNewCustomerName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [newCustomerAddress, setNewCustomerAddress] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businesstype, setBusinesstype] = useState("");
  const [businessYear, setBusinessYear] = useState("");
  const [dgForYourBusiness, setDgForYourBusiness] = useState("");
  const [dgUse, setDgUse] = useState("");


  const [error_msg, setErrorMsg] = useState(
    "Please enter the value for the above field"
  );
  const navigate = useNavigate();

  //   const handleOnChange = (isChecked, value) => {
  //     let temp = [...ratingForCRM];
  //     var pre = value.split("_")[0];
  //     if (isChecked) {
  //       temp = temp.filter((item) => item.split("_")[0] !== pre);
  //       temp.push(value);
  //       setRatingForCRM(temp);
  //       return;
  //     }
  //     setRatingForCRM(temp.filter((item) => item !== value));
  //   };

  const formSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://videoaudit-server.onrender.com/api/marketing/add", {
        newCustomerName: newCustomerName,
        mobNo: mobNo,
        newCustomerAddress: newCustomerAddress,
        businessName: businessName,
        businesstype: businesstype,
        businessYear: businessYear,
        dgForYourBusiness: dgForYourBusiness,
        dgUse: dgUse,
      })
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-right",
        });
        navigate("/");
        setDisplay(false);
      })
      .catch((error) => console.log(error));
    setErrorMsg("Please enter the value for the above field");
  };
 const handleOldBusiness = (e) => {
   setBusinessYear(e.target.value);
 };

 const handleDgUse = (e) => {
   setDgUse(e.target.value);
 };

 const handleDgYourBusiness = (e) => {
   setDgForYourBusiness(e.target.value);
 };
  return (
    <Container>
      {displayform ? (
        <Card>
          <Card.Header>
            <cite title="Source Title">
              Time invested in improving a business is never wasted; it’s a step
              toward a more successful future
            </cite>
          </Card.Header>

          <Container className="padding30px">
            <Form onSubmit={formSubmit}>
              <Row>
                <Col md={6}>
                  <h6
                    style={{ textAlign: "left", textDecoration: "underline" }}
                  >
                    Contact Info
                  </h6>
                  <Row style={{ marginBottom: "20px" }}>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="required-field">
                          Your Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          placeholder="Enter Your Name"
                          value={newCustomerName}
                          onChange={(e) => setNewCustomerName(e.target.value)}
                        />
                      </Form.Group>
                      <Alert variant="danger" id="name_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile Number</Form.Label>

                        <Form.Control
                          type="tel"
                          placeholder="99999 99999"
                          value={mobNo}
                          onChange={(e) => setMobNo(e.target.value)}
                        />
                      </Form.Group>
                      <Alert variant="danger" id="phone_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City Name"
                          value={newCustomerAddress}
                          onChange={(e) =>
                            setNewCustomerAddress(e.target.value)
                          }
                        />
                      </Form.Group>
                      <Alert variant="danger" id="name_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>
                  </Row>
                  <h6
                    style={{ textAlign: "left", textDecoration: "underline" }}
                  >
                    Business Info
                  </h6>
                  <Row style={{ marginTop: "20px" }}>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="required-field">
                          Business Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          placeholder="Your Business Name"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                      </Form.Group>
                      <Alert variant="danger" id="name_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Business Type</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Business Type"
                          value={businesstype}
                          onChange={(e) => setBusinesstype(e.target.value)}
                        />
                      </Form.Group>
                      <Alert variant="danger" id="name_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How old is the business</Form.Label>
                        <Form.Select
                          defaultValue={0}
                          value={businessYear}
                          onChange={handleOldBusiness}
                        >
                          <option>--Select Option --</option>
                          <option value="less 2 years">Less 2 years</option>
                          <option value="2 - 5 years">2 - 5 Years</option>
                          <option value="5 - 10 years">5 - 10 Years</option>
                          <option value="above 10years">Above 10Years</option>
                        </Form.Select>
                      </Form.Group>
                      <Alert variant="danger" id="name_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="required-field">
                          Has ever tried digital marketing before
                        </Form.Label>
                        <Form.Select
                          defaultValue={0}
                          value={dgUse}
                          onChange={handleDgUse}
                        >
                          <option>--Select Option --</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                      <Alert variant="danger" id="name_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "20px" }}>
                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="required-field">
                          Digital Marketing for your business
                        </Form.Label>
                        <Form.Select
                          defaultValue={0}
                          value={dgForYourBusiness}
                          onChange={handleDgYourBusiness}
                        >
                          <option>--Select Option --</option>
                          <option value="business awareness">
                            Business Awareness
                          </option>
                          <option value="to get more walking">
                            To get more walking
                          </option>
                          <option value="to get sales">To get sales </option>
                          <option value="smm">
                            social Media Maintenance(SMM)
                          </option>
                          <option value="facebood-ad">Facebook Ad's</option>
                          <option value="google-ad">Google Ad's</option>
                          <option value="website-ad">Website Ad's </option>
                        </Form.Select>
                      </Form.Group>
                      <Alert variant="danger" id="name_er">
                        &#9432;{error_msg}
                      </Alert>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <img
                    className="image"
                    src="https://www.digitalsdaddy.com/wp-content/uploads/2022/09/digitalmarketing-1.png"
                    alt="swafc"
                    style={{ marginTop: "80px", width: "100%", height: "auto" }}
                  />
                </Col>
              </Row>
              <Button className="btn_purp" type="submit">
                Schedule a Meeting
              </Button>
            </Form>
          </Container>
        </Card>
      ) : (
        <Card bg="light" text="dark">
          <Card.Body>
            <InlineWidget style={{ marginBottom:'50px' }} url="https://calendly.com/sivaramya-kairatechnologies/30min" />
            {/* <Button className="btn_purp" id="btn_back" >
              <Link to="/" style={{ color: "#ffffff"}}>
                {" "}
                <BsArrowLeftCircleFill style={{ color:'#fff' }} />
              </Link>
            </Button> */}
            {/* <Card.Text>Thank you for providing the feedback</Card.Text>
            <Form.Text muted>
              We will work towards improving your experience
            </Form.Text>
            <div className="padding30px">
              <Button
                className="btn_purp"
                onClick={() => (window.location.href = "/")}
              >
                Close
              </Button>
            </div> */}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default FeedbackForm;
