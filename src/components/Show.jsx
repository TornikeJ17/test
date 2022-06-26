import React, { useEffect } from "react";
import { Container, IMG } from "./Styled";

const Show = ({ data, imageUrls }) => {
  return (
    <Container>
      {data?.galleryImages?.map((item, index) => (
        <IMG key={index} src={item.url} />
      ))}
      {imageUrls.map((url, index) => (
        <IMG key={index} src={url} />
      ))}
    </Container>
  );
};

export default Show;
