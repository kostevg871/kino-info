import { Flex, Image, Spin } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./styles.module.css";
import { useGetMovieByIDQuery } from "../../api/movieApi";
import { useParams } from "react-router-dom";
import Paragraph from "antd/es/typography/Paragraph";
import { DataText } from "../../components/DataText/DataText";

const SingleMovie = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetMovieByIDQuery(Number(id));
  console.log(data);

  return (
    <Flex vertical className={styles.content}>
      {isSuccess ? (
        <>
          <Title>{`${data?.rating.filmCritics} ${data?.name}`}</Title>
          <Flex flex={3}>
            <Flex vertical flex={2}>
              <Paragraph>{data?.description}</Paragraph>
              <Paragraph
                style={{ margin: 0 }}
              >{`Длительность: ${data?.movieLength} мин.`}</Paragraph>
              <DataText date={data.premiere.world} />
              <Paragraph style={{ margin: 0 }}>{`Жанр: ${data?.genres.map(
                (genre) => " " + genre.name
              )}`}</Paragraph>
            </Flex>
            <Flex flex={1}>
              <Image height="100%" src={data?.poster.previewUrl} />
            </Flex>
          </Flex>
        </>
      ) : (
        <Spin />
      )}
    </Flex>
  );
};

export default SingleMovie;
