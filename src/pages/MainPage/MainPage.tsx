import { Card, Image, Typography, Flex, Spin } from "antd";

import { useGetMoviesQuery } from "../../api/movieApi";
import Paragraph from "antd/es/typography/Paragraph";
import { IMovies } from "../../utils/types";
import styles from "./styles.module.css";

const { Title } = Typography;

export const MainPage = () => {
  const { data, isLoading, isFetching, isSuccess } = useGetMoviesQuery({});

  return (
    <main className={styles.content}>
      <Title style={{ color: "white" }}>Лучшие фильмы</Title>
      <Flex wrap="wrap" gap="small" justify="space-between">
        {isLoading || isFetching ? (
          <Spin />
        ) : isSuccess && data.total === 0 ? (
          <Paragraph>Нет фильмов</Paragraph>
        ) : (
          data?.docs.map((movie: IMovies) => {
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
                <Flex>
                  <p className={styles.rate}>{movie.rating.imdb}</p>
                  <Flex className={styles.info}>
                    <p>{movie.name}</p>
                    <p>{movie.year}</p>
                  </Flex>
                </Flex>
              </Card>
            );
          })
        )}
      </Flex>
    </main>
  );
};
