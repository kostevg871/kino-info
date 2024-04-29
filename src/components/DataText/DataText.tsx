import Paragraph from "antd/es/typography/Paragraph";
import { formateDate } from "../../utils/formateDate";

interface Props {
  date: string;
}

export const DataText = ({ date }: Props) => {
  return (
    <Paragraph style={{ margin: 0 }}>{`Дата выхода: ${
      date === null ? formateDate(date) : "Неизвестно"
    }`}</Paragraph>
  );
};
