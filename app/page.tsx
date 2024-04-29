"use client";




import { ImageQuestionSection } from "@/components/Sections/ImageQuestionSection/section/ImageQuestionSection";
import SectionFinalSurprise from "@/components/Sections/SectionFinalSurprise";
import { SectionFreeInput } from "@/components/Sections/SectionFreeInput/section/SectionFreeInput";
import SectionVariantQuestion from "@/components/Sections/SectionVariantQuestion";
import { SectionImageQuestionTestContent } from '@/testContent/imagequestionsection';
import { SectionFreeInputTestContent } from "@/testContent/sectionFreeInput";
import { variantTestContent } from "@/testContent/variantTestContent";

export default function Home() {
  return (

    <main className="page">

     {/*  <SectionFreeInput
        question={SectionFreeInputTestContent.question}
        answer={SectionFreeInputTestContent.answer}
        id={SectionFreeInputTestContent.id}
        blockImage={SectionFreeInputTestContent.blockImage}
        nextSectionId={SectionFreeInputTestContent.nextSectionId}
        title={SectionFreeInputTestContent.title}
      />
      <SectionVariantQuestion
        question={variantTestContent.question}
        answer={variantTestContent.answer}
        id={variantTestContent.id}
        blockImage={variantTestContent.blockImage}
        nextSectionId={variantTestContent.nextSectionId}
        title={variantTestContent.title}
      /> */}

      {/*   <SectionFinalSurprise wishers={SectionFinalSurprise}      /> */}

      {/*      <FeedPhotoSection title={feedSectionTestContent.title} subtitle={feedSectionTestContent.subtitle} 
      collage={feedSectionTestContent.collage}/> */}
      <ImageQuestionSection id={""}

      blockImage={SectionImageQuestionTestContent.blockImage}
       question={SectionImageQuestionTestContent.question}
        answer={SectionImageQuestionTestContent.answer}
         nextSectionId={""}
          title={SectionImageQuestionTestContent.title}/>

    </main>
  );
}
