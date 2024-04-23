"use client";


import MasonryLayout from "@/components/CollageComponents/CollageComponents";
import Collage from "@/components/CollageComponents/CollageComponents";
import CollageComponent from "@/components/CollageComponents/CollageComponents";
import { FeedPhotoSection } from "@/components/Sections/FeedPhotoSection/FeedPhotoSection";
import { ImageQuestionSection } from "@/components/Sections/ImageQuestionSection/ImageQuestionSection";
import { SectionFreeInput } from "@/components/Sections/SectionFreeInput/SectionFreeInput";
import { VariantQuestionSections } from "@/components/Sections/VariantsQustionSections/VariantsQuestionSection";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import { feedSectionTestContent } from "@/testContent/collage";
import { SectionFreeInputTestContent } from "@/testContent/sectionFreeInput";
import { variantSectionTestContent } from "@/testContent/variantSectionTest";
import { SectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/SectionFinalSurprise";
import { testContent, variantTestContent } from "@/testContent/variantTestContent";
import {SectionImageQuestionTestContent} from '@/testContent/imagequestionsection'
import SectionVariantQuestion from "@/components/Sections/SectionVariantQuestion";
import { sectionFinalSurprise } from "@/testContent/sectionFinalSurprise";
import { ImageQuestionSection } from "@/components/Sections/ImageQuestionSection/ImageQuestionSection";

export default function Home() {
  return (

    <main className="page">
      <SectionFreeInput
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
      />

      <SectionFinalSurprise wishers={SectionFinalSurprise}      />

 {/*      <FeedPhotoSection title={feedSectionTestContent.title} subtitle={feedSectionTestContent.subtitle} 
      collage={feedSectionTestContent.collage}/> */}
    <ImageQuestionSection id={""} nextSectionId={""} underSectionImage={SectionImageQuestionTestContent.underSectionImage} question={SectionImageQuestionTestContent.question}
     answer={SectionImageQuestionTestContent.answer}/>

    </main>
  );
}
