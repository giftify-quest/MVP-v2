import styles from "./style.module.scss";

interface ISectionTitle {
  mainWord: string;
  secondWord?: string;
}

export const SectionTitle: React.FC<ISectionTitle> = ({
  mainWord,
  secondWord,
}) => {
  return (
    <div className={styles.wrapper}>
      <div></div>
      <div></div>
    </div>
  );
};
