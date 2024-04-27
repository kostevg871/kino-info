import { Typography, Flex, Spin } from "antd";

import { useGetMoviesQuery } from "../../api/movieApi";
import Paragraph from "antd/es/typography/Paragraph";
import { IMovies } from "../../utils/types";
import styles from "./styles.module.css";
import { MovieCard } from "../../components/MovieCard/MovieCard";

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
            return <MovieCard movie={movie} />;
          })
        )}
      </Flex>
    </main>
  );
};
