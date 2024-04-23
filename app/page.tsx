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
import { testContent } from "@/testContent/variantTestContent";
import {SectionImageQuestionTestContent} from '@/testContent/imagequestionsection'

export default function Home() {
  return (
<main

    >
{/*       <VariantQuestionSections id={""}
       answer={variantSectionTestContent.answer}
        nextSectionId={""}
         underSectionImage={variantSectionTestContent.underSectionImage}
          title={variantSectionTestContent.title}
           question={variantSectionTestContent.question}/>
      <SectionFreeInput
        question={SectionFreeInputTestContent.question}
        answer={SectionFreeInputTestContent.answer}
        id={SectionFreeInputTestContent.id}
        nextSectionId={SectionFreeInputTestContent.nextSectionId}
        underSectionImage={SectionFreeInputTestContent.underSectionImage}
      /> */}

 {/*      <FeedPhotoSection title={feedSectionTestContent.title} subtitle={feedSectionTestContent.subtitle} 
      collage={feedSectionTestContent.collage}/> */}
    <ImageQuestionSection id={""} nextSectionId={""} underSectionImage={SectionImageQuestionTestContent.underSectionImage} question={SectionImageQuestionTestContent.question}
     answer={SectionImageQuestionTestContent.answer}/>

    </main>
  );
}
