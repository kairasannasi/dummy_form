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
function ZoomFormTamil() {
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
        <div>
          <div style={{ textAlign: "end" }}>
            <p style={{ fontSize: "12px" }}>
              {" "}
              Select your language :
              <Link
                to="/"
                style={{ textDecoration: "none", fontWeight: "600" }}
              >
                {" "}
                Engish
              </Link>{" "}
              /
              <Link
                to="/zoom-tamil"
                style={{ textDecoration: "none", fontWeight: "600" }}
              >
                {" "}
                தமிழ்
              </Link>
            </p>
          </div>
          <Card>
            <Card.Header>
              <cite title="Source Title">
                ஒரு தொழிலை மேம்படுத்த முதலீடு செய்யும் நேரம் வீணாகாது; இது
                மிகவும் வெற்றிகரமான எதிர்காலத்தை நோக்கிய ஒரு படியாகும்
              </cite>
            </Card.Header>

            <Container className="padding30px">
              <Form onSubmit={formSubmit}>
                <Row>
                  <Col md={6}>
                    <h6
                      style={{ textAlign: "left", textDecoration: "underline" }}
                    >
                      தொடர்பு தகவல்
                    </h6>
                    <Row style={{ marginBottom: "20px" }}>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="required-field">
                            உங்கள் பெயர்
                          </Form.Label>
                          <Form.Control
                            type="text"
                            required
                            placeholder="உங்கள் பெயரை உள்ளிடவும்"
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
                          <Form.Label>மொபைல் எண்</Form.Label>

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
                          <Form.Label>நகரம்</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="நகரத்தின் பெயர்"
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
                      வணிகத் தகவல்
                    </h6>
                    <Row style={{ marginTop: "20px" }}>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="required-field">
                            வணிகத்தின் பெயர்
                          </Form.Label>
                          <Form.Control
                            type="text"
                            required
                            placeholder="உங்கள் வணிகத்தின் பெயர்"
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
                          <Form.Label>வணிக வகை</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="உங்கள் வணிகத்தின் வகை"
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
                      {" "}
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="required-field">
                            இதற்கு முன் டிஜிட்டல் மார்க்கெட்டிங் முயற்சி
                            செய்திருக்கிற்களா
                          </Form.Label>
                          <Form.Select
                            defaultValue={0}
                            value={dgUse}
                            onChange={handleDgUse}
                          >
                            <option>--விருப்பத்தை தேர்ந்தெடு --</option>
                            <option value="yes">ஆம்</option>
                            <option value="no">இல்லை</option>
                          </Form.Select>
                        </Form.Group>
                        <Alert variant="danger" id="name_er">
                          &#9432;{error_msg}
                        </Alert>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            தொழில் ஆரம்பித்து எவ்வளவு வருடமாகிறது
                          </Form.Label>
                          <Form.Select
                            defaultValue={0}
                            value={businessYear}
                            onChange={handleOldBusiness}
                          >
                            <option>--விருப்பத்தை தேர்ந்தெடு --</option>
                            <option value="less 2 years">
                              2 வருடங்களுக்கும் குறைவானது
                            </option>
                            <option value="2 - 5 years">2 - 5 ஆண்டுகள்</option>
                            <option value="5 - 10 years">
                              5 - 10 ஆண்டுகள்
                            </option>
                            <option value="above 10years">
                              10 ஆண்டுகளுக்கு மேல்
                            </option>
                          </Form.Select>
                        </Form.Group>
                        <Alert variant="danger" id="name_er">
                          &#9432;{error_msg}
                        </Alert>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="required-field">
                            உங்கள் வணிகத்திற்கான டிஜிட்டல் மார்க்கெட்டிங்
                          </Form.Label>
                          <Form.Select
                            defaultValue={0}
                            value={dgForYourBusiness}
                            onChange={handleDgYourBusiness}
                          >
                            <option>--விருப்பத்தை தேர்ந்தெடு --</option>
                            <option value="business awareness">
                              வணிக விழிப்புணர்வு
                            </option>
                            <option value="to get more walking">
                              மேலும் நடைபயிற்சி பெற
                            </option>
                            <option value="to get sales">விற்பனை பெற</option>
                            <option value="smm">
                              சமூக ஊடக பராமரிப்பு(SMM)
                            </option>
                            <option value="facebood-ad">
                              பேஸ்புக் விளம்பரங்கள்
                            </option>
                            <option value="google-ad">
                              கூகுல் விளம்பரங்கள்
                            </option>
                            <option value="website-ad">
                              இணையதள விளம்பரங்கள்
                            </option>
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
                      style={{
                        marginTop: "80px",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Col>
                </Row>
                <Button className="btn_purp" type="submit">
                  Schedule a Meeting
                </Button>
              </Form>
            </Container>
          </Card>
        </div>
      ) : (
        <Card bg="light" text="dark">
          <Card.Body>
            <InlineWidget
              style={{ marginBottom: "50px" }}
              url="https://calendly.com/sivaramya-kairatechnologies/30min"
            />
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

export default ZoomFormTamil;
