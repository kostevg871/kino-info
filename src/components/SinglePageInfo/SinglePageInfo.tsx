import Title from "antd/es/typography/Title";
import Flex from "antd/es/flex";
import Image from "antd/es/image";
import Paragraph from "antd/es/typography/Paragraph";
import { DataText } from "../DataText/DataText";
import Spin from "antd/es/spin";
import { IMovie } from "../../utils/types";

interface Props {
  data: IMovie;
  isSuccess: boolean;
}

export const SinglePageInfo = ({ data, isSuccess }: Props) => {
  return (
    <Flex vertical wrap="nowrap">
      {isSuccess ? (
        <>
          <Title>{`${data?.rating.filmCritics} ${data?.name}`}</Title>
          <Flex flex={3} gap={6}>
            <Flex vertical flex={2}>
              <Paragraph>{data?.description}</Paragraph>
              {data.movieLength === null ? (
                <></>
              ) : (
                <Paragraph
                  style={{ margin: 0 }}
                >{`Длительность: ${data.movieLength} мин.`}</Paragraph>
              )}

              <DataText date={data.premiere.world} />
              <Paragraph style={{ margin: 0 }}>{`Жанр: ${data?.genres.map(
                (genre) => " " + genre.name
              )}`}</Paragraph>
            </Flex>
            <Flex flex={1}>
              <Image src={data?.poster.previewUrl} />
            </Flex>
          </Flex>
        </>
      ) : (
        <Spin />
      )}
    </Flex>
  );
};
