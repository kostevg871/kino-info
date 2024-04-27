import { IMovies } from "../../utils/types";
import { useGetSimularMoviesQuery } from "../../api/movieApi";
import Title from "antd/es/typography/Title";
import Flex from "antd/es/flex";
import { Card, Image } from "antd";
import styles from "./styles.module.css";

interface Props {
  nameMovie: string;
}

export const SimularMovie = ({ nameMovie }: Props) => {
  const { data } = useGetSimularMoviesQuery(nameMovie);
  return (
    <Flex vertical>
      <Title>Похожие фильмы</Title>
      <Flex wrap="wrap" justify="space-between">
        {data?.docs.map((movie: IMovies) => {
          return (
            <Card
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
              <p className={styles.info}>{movie.name}</p>
            </Card>
          );
        })}
      </Flex>
    </Flex>
  );
};
