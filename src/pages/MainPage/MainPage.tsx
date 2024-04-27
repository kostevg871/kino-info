import { Typography, Flex, Spin, Pagination } from "antd";

import { useGetMoviesQuery } from "../../api/movieApi";
import Paragraph from "antd/es/typography/Paragraph";
import { IMovies } from "../../utils/types";
import styles from "./styles.module.css";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useState } from "react";

const { Title } = Typography;

export const MainPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isFetching, isSuccess } = useGetMoviesQuery({
    page: pageNumber,
  });

  return (
    <main className={styles.content}>
      <Title style={{ color: "white" }}>Лучшие фильмы</Title>
      {data ? (
        <Pagination
          className={styles.pagination}
          total={data.total}
          showSizeChanger={false}
          current={pageNumber}
          onChange={setPageNumber}
        />
      ) : (
        <></>
      )}

      {isLoading || isFetching ? (
        <Flex justify="center" align="start">
          <Spin />
        </Flex>
      ) : isSuccess && data && data.total === 0 ? (
        <Paragraph>Нет фильмов</Paragraph>
      ) : (
        <div className={styles.movies}>
          {data?.docs.map((movie: IMovies) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      )}
    </main>
  );
};
