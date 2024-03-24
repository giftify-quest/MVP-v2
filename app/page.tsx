"use client";

import { ButtonConfirm } from "@/reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion";
import { QuestionInterface } from "@/types/question/QuestionInterface";
import { TextField } from "@/reusableComponent/TextField/TextField";
import { TextFieldInfo } from "@/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/reusableComponent/section-title/SectionTitle";
import { ChangeEvent } from "react";
import { VariantTextField } from "@/reusableComponent/VariantsTextField/VariantTextField";
import { ButtonMain } from "@/reusableComponent/ButtonMain/ButtonMain";
import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { AnswerWithPicture } from "@/components/AnswerComponents/AnswerWithPicture/AnswerWithPicture";
import { PhotosSection } from "@/components/PhotosSection/PhotosSection";

export default function Home() {
  return (
    <main
      style={{
        background: "#F6F5DE",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        padding: "20px 40px",
      }}
    >
      {/* <VariantQuestion /> */}

      <AnswerWithOutPicture
        successText="Yes"
        bgSrc="/assets/bg-answer-with-out-present.jpg"
      />
      <AnswerWithPicture
        framedPhotoSrc="/assets/bg-answer-with-present-photo.jpg"
        bgSrc="/assets/bg-answer-with-present-photo.jpg"
        successText="Hello welcome good morning evening day light worked walk interested for in "
      />
      <PhotosSection
        photos={[
          {
            path: "/assets/component-photos.jpg",
          },
          {
            path: "/assets/component-photos.jpg",
          },
        ]}
      />
    </main>
  );
}
