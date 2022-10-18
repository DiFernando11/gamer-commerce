import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTop12 } from "../../redux/actions";
import CarouselButtons from "../carouselButtons";

function CarrouselPunctuation() {
  const dispatch = useDispatch();
  const videoGames = useSelector((state) => state.videoGames);

  useEffect(() => {
    dispatch(getTop12());
  }, [dispatch]);
  // console.log(videoGames);

  return (
    <section className="carousel_puntuaction">
      <CarouselButtons game={videoGames} category={false} />
    </section>
  );
}

export default CarrouselPunctuation;
