import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, postReview } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Reviews = ({ userid, gameid }) => {
  const reviews = useSelector((state) => state.getReview);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [input, setInput] = useState({
    rating: 0,
    userid: userid,
    gameid: gameid,
  });

  const handleClick = (value) => {
    setCurrentValue(value);
    setInput({
      ...input,
      rating: value,
    });
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentValue(0);
    dispatch(postReview(input));
    setInput({
      rating: 0,
      userid: userid,
      gameid: gameid,
    });
  }

  useEffect(() => {
    if (user?.id) {
      dispatch(getReviews(user?.id, id));
    }
  }, [dispatch, user?.id, id]);

  console.log(reviews);
  console.log(hoverValue, "hover");

  return (
    <Container fluid className="text-light text-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Col md={{ span: 6, offset: 3 }}>
          <Row>
            <Col>
              {reviews?.review ? (
                <Col>
                  My previous review
                  {reviews?.review?.rating === 1 ? (
                    <div>
                      <StarIcon style={{ color: "yellow" }} />
                    </div>
                  ) : reviews?.review?.rating === 2 ? (
                    <div>
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                    </div>
                  ) : reviews?.review?.rating === 3 ? (
                    <div>
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                    </div>
                  ) : reviews?.review?.rating === 4 ? (
                    <div>
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                    </div>
                  ) : reviews?.review?.rating === 5 ? (
                    <div>
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                      <StarIcon style={{ color: "yellow" }} />
                    </div>
                  ) : null}
                </Col>
              ) : (
                <h3>Rate this game</h3>
              )}
            </Col>
          </Row>
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
                variant="success"
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
