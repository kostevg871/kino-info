import { Card, Image, Flex } from "antd";
import styles from "./styles.module.css";
import { IMovies } from "../../utils/types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovies;
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
      className={styles.card}
      key={movie.id}
      bordered={false}
      hoverable={false}
      styles={{
        body: {
          padding: 10,
          maxWidth: 220,
          borderRadius: 0,
        },
      }}
    >
      <Image
        width={200}
        alt={movie.name}
        src={movie.poster.previewUrl}
        preview={false}
      />
      <Flex>
        <p className={styles.rate}>{movie.rating.imdb}</p>
        <Flex className={styles.info}>
          <p>{movie.name}</p>
          <p>{movie.year}</p>
        </Flex>
      </Flex>
    </Card>
  );
};
