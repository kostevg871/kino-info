import { Typography, Flex, Spin, Pagination } from "antd";

import { useGetMoviesQuery } from "../../api/movieApi";
import Paragraph from "antd/es/typography/Paragraph";
import { IMovies } from "../../utils/types";
import styles from "./styles.module.css";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useSearchParams } from "react-router-dom";

const { Title } = Typography;

export const MainPage = () => {
  const [pageParams, setPageParams] = useSearchParams();
  const pageParamsQuery = Number(pageParams.get("page")) || 1;
  const { data, isLoading, isFetching, isSuccess } = useGetMoviesQuery({
    page: pageParamsQuery,
  });

  const handlerPaginationChange = (page: number) => {
    pageParams.set("page", `${page}`);
    setPageParams(pageParams);
  };

  return (
    <main className={styles.content}>
      <Title style={{ color: "white" }}>Лучшие фильмы</Title>
      {data ? (
        <Pagination
          className={styles.pagination}
          total={data.total}
          showSizeChanger={false}
          current={pageParamsQuery}
          onChange={(page) => handlerPaginationChange(page)}
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
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      )}
    </main>
  );
};
