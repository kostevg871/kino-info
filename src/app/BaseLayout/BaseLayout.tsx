import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const { Header, Content } = Layout;

export const BaseLayout = () => {
  return (
    <Layout className={styles.main}>
      <Header className={styles.header}>Кино справочник</Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
};
