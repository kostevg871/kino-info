import Flex from "antd/es/flex";
import { SinglePageInfo } from "../../components/SinglePageInfo/SinglePageInfo";
import styles from "./styles.module.css";
import { SimularMovie } from "../../components/SimularMovie/SimularMovie";
import { useParams } from "react-router-dom";
import { useGetMovieByIDQuery } from "../../api/movieApi";

const SinglePage = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetMovieByIDQuery(Number(id));
  return (
    data && (
      <Flex className={styles.content} wrap="wrap">
        <SinglePageInfo data={data} isSuccess={isSuccess} />
        <SimularMovie nameMovie={data.name} />
      </Flex>
    )
  );
};

export default SinglePage;
