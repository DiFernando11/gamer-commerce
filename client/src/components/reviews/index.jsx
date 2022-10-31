import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";

const Reviews = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentValue);
    setCurrentValue(0);
    /* dispatch(postLogin(input)); */
  }

  return (
    <Container fluid className="text-light text-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Col md={{ span: 6, offset: 3 }}>
          <Row>
            <Col>
              {[1, 2, 3, 4, 5].map((star, i) => {
                return (
                  <StarIcon
                    key={i}
                    size={36}
                    style={{ cursor: "pointer" }}
                    color={
                      hoverValue >= i + 1
                        ? "light"
                        : currentValue >= i + 1
                        ? "light"
                        : "action"
                    }
                    onClick={() => handleClick(i + 1)}
                    onMouseOver={() => handleMouseOver(i + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
              <h5>{currentValue === 0 ? hoverValue : currentValue} / 5</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="primary"
                type="submit"
                disabled={currentValue === 0}
              >
                Send
              </Button>
            </Col>
          </Row>
        </Col>
      </form>
    </Container>
  );
};

export default Reviews;
