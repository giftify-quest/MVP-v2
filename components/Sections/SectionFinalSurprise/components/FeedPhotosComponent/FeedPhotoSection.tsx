import Collage from "@/components/Sections/SectionFinalSurprise/components/CollageComponents/CollageComponents";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import heartImg from "@/public/assets/heart.png";
import Image from "next/image";
import styles from "./style.module.scss";
import { IFeedPhotosComponent } from "../../types";

export const FeedPhotosComponents: React.FC<IFeedPhotosComponent> = ({
  title,
  subTitle,
  collage,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <SectionTitle
          mainWord={title}
          variant={"purple"}
          secondWord={subTitle}
        />

        <div className={styles.emoji_1}>
          <Image src={heartImg} alt={"emoji"} width={70} />
        </div>
        <div className={styles.emoji_2}>
          <Image src={heartImg} alt={"emoji"} width={70} />
        </div>
        <div className={styles.emoji_3}>
          <Image src={heartImg} alt={"emoji"} width={45} />
        </div>
        <div className={styles.emoji_4}>
          <Image src={heartImg} alt={"emoji"} width={35} />
        </div>
        <div className={styles.emoji_5}>
          <Image src={heartImg} alt={"emoji"} width={25} />
        </div>
        <div className={styles.emoji_6}>
          <Image src={heartImg} alt={"emoji"} width={50} />
        </div>
      </div>
      <Collage collage={collage} />
    </>
  );
};
