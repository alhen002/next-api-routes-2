import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
const fetcher = (url) => fetch(url).then((res) => res.json());

const StyledCharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 480px;
`;

const StyledCharacterName = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`;

const StyledCharacterParagraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load</div>;

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      <StyledCharacterCard>
        <StyledCharacterName>Name: {data?.name}</StyledCharacterName>
        <StyledCharacterParagraph>
          Email: {data?.email}
        </StyledCharacterParagraph>
        <StyledCharacterParagraph>
          Gender: {data?.gender}
        </StyledCharacterParagraph>
        <StyledCharacterParagraph>Age:{data?.age}</StyledCharacterParagraph>
      </StyledCharacterCard>
    </main>
  );
}
