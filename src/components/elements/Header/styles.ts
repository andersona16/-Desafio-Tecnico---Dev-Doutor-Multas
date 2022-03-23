import styled from "styled-components";

export const Principal = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.625rem;
  background-color: white;

  > img{
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  background: var(--grey);
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  background-color: #F4F4F4;

  > img {
    max-width: 100%;
    height: auto;
  }

  > div {
    > h3 {
      justify-self: left;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 1.95rem;
      font-style: italic;
      font-weight: 400;
      color: hsl(193deg 10% 37%);
    }

    > h2 {
      font-family: "Kaushan Script", sans-serif;
      font-size: 3.75rem;
      color: hsl(206deg 75% 42%);
      line-height: 1.8rem;
      font-weight: 400;
      margin-left: 100px;
    }
  }
`;
