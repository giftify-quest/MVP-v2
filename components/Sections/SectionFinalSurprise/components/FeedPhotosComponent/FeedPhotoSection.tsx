import Collage from "@/components/Sections/SectionFinalSurprise/components/CollageComponents/CollageComponents";
import styles from "./style.module.scss";
import { IFeedPhotosComponent } from "../../types";
import { TitleFeedPhotosComponent } from "../TitleFeedPhotosComponent/TitleFeedPhotosComponent";
import { useRef } from "react";

export const FeedPhotosComponents: React.FC<IFeedPhotosComponent> = ({
  title,
  subTitle,
  collage,
  bottomRef,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <TitleFeedPhotosComponent
          mainWord={title}
          variant={"purple"}
          secondWord={subTitle}
        />
      </div>
      <Collage collage={collage} bottomRef={bottomRef} />
    </>
  );
};
