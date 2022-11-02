import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, postReview, setRefreshUpdate } from "../../redux/actions";
import { useParams } from "react-router-dom";
import "./index.css";
import Swal from "sweetalert2";

const Reviews = () => {
  const reviews = useSelector((state) => state.getReview);
  const [currentValue, setCurrentValue] = useState(0);
  const [isChangeValue, setIsChangeValue] = useState(false);
  const user = useSelector((state) => state.user);
  const [refreshUpdate, setRefreshUpdates] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [input, setInput] = useState({
    rating: 0,
    userid: user?.id,
    gameid: parseInt(id),
  });

  const handleClick = (value) => {
    setCurrentValue(value);
    setIsChangeValue(true);
    setInput({
      ...input,
      rating: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (reviews.hasOwnProperty("review")) {
      handleSweetAlertExistedReview();
    } else {
      dispatch(postReview(input));
      handleSweetAlertPostReview();
    }
  }
  const handleSweetAlertExistedReview = () => {
    Swal.fire({
      icon: "question",
      title:
        "You already have a review for this game, you are sure to change it?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Yes",
      confirmButtonColor: "#4BB543",
    }).then((response) => {
      if (response.isConfirmed) {
        dispatch(postReview(input));
        handleSweetAlertSuccesReview();
      }
      if (response.isDenied) {
        setCurrentValue(reviews?.review?.rating);
      }
    });
  };

  const handleSweetAlertPostReview = () => {
    console.log("AlertPostReview");
    Swal.fire({
      icon: "success",
      html: "<h3>Thank you for your contribution, review successfully submitted.</h3>",
      confirmButtonText: "Yes",
      confirmButtonColor: "#4BB543",
    }).then((res) => {
      if (res.isConfirmed) {
        setInput({
          rating: 0,
          userid: user?.id,
          gameid: parseInt(id),
        });
        setRefreshUpdates(!refreshUpdate);
        dispatch(setRefreshUpdate());
      }
    });
  };
  const handleSweetAlertSuccesReview = () => {
    Swal.fire({
      icon: "success",
      html: "<h3>Thank you for your contribution, review successfully submitted.</h3>",
      confirmButtonText: "Yes",
      confirmButtonColor: "#4BB543",
    }).then((res) => {
      if (res.isConfirmed) {
        setInput({
          rating: 0,
          userid: user?.id,
          gameid: parseInt(id),
        });
        dispatch(setRefreshUpdate());
      }
    });
  };

  const getReviewGame = async () => {
    if (user?.id) {
      await dispatch(getReviews(user?.id, id));
    }
    setCurrentValue(reviews?.review?.rating);
    setRefreshUpdates(true);
  };

  useEffect(() => {
    getReviewGame();
  }, [dispatch, user?.id, id, refreshUpdate]);

  return (
    <Container fluid className="text-light text-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Col md={{ span: 6, offset: 3 }}>
          {reviews.hasOwnProperty("review") ? (
            <span className="textMyReviewReviews">MY REVIEW</span>
          ) : (
            <span className="textMyReviewReviews">LEAVE YOUR REVIEW</span>
          )}

          <div className="flexContainerStarsReviewsButton">
            <Row>
              <Col>
                <div className="containerFlexStarReviews">
                  <i
                    onClick={() => handleClick(1)}
                    className={`bi bi-star-fill ${
                      currentValue >= 1 ? "activeStars" : ""
                    }`}
                  ></i>
                  <i
                    onClick={() => handleClick(2)}
                    className={`bi bi-star-fill ${
                      currentValue >= 2 ? "activeStars" : ""
                    }`}
                  ></i>
                  <i
                    onClick={() => handleClick(3)}
                    className={`bi bi-star-fill ${
                      currentValue >= 3 ? "activeStars" : ""
                    }`}
                  ></i>
                  <i
                    onClick={() => handleClick(4)}
                    className={`bi bi-star-fill ${
                      currentValue >= 4 ? "activeStars" : ""
                    }`}
                  ></i>
                  <i
                    onClick={() => handleClick(5)}
                    className={`bi bi-star-fill ${
                      currentValue >= 5 ? "activeStars" : ""
                    }`}
                  ></i>
                  <h5>{currentValue ? currentValue : 0} / 5</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="success"
                  type="submit"
                  disabled={currentValue === 0 || !isChangeValue}
                >
                  {reviews.hasOwnProperty("review") ? "Change" : "Send"}
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </form>
    </Container>
  );
};

export default Reviews;
