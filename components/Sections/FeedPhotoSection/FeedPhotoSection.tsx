import Collage from "@/components/CollageComponents/CollageComponents"
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import styles from "./style.module.scss";
import heartImg from '@/public/assets/heart.png';
import Image from 'next/image';
import { FeedPhotoSectionProps } from "@/types/feedPhotoSectionProps/feedPhotoSectionProps";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import { ChangeEvent } from "react";





export const FeedPhotoSection: React.FC<FeedPhotoSectionProps> = ({ title, subtitle, collage }) => {

    return (
        <>
            <div className={styles.wrapper}>

                <SectionTitle mainWord={title} variant={"purple"} secondWord={subtitle} />
            
                <div style={{ position: 'absolute', left: '60rem',top:'12rem' }}>
                    <Image src={heartImg} alt={'emoji'} width={70} />
                </div>
                <div style={{ position: 'absolute', left: '55rem',top:'15rem' }}>
                    <Image src={heartImg} alt={'emoji'} width={70} />
                </div>
                <div style={{ position: 'absolute',left: '50rem',top:'15rem' }}>
                    <Image src={heartImg} alt={'emoji'} width={45} />
                </div>
                <div style={{ position: 'absolute', left: '45rem',top:'15rem' }}>
                    <Image src={heartImg} alt={'emoji'} width={35} />
                </div>
                <div style={{ position: 'absolute',left: '65rem',top:'15rem' }}>
                    <Image src={heartImg} alt={'emoji'} width={25} />
                </div>
                <div style={{ position: 'absolute',left: '70rem',top:'15rem' }}>
                    <Image src={heartImg} alt={'emoji'} width={50} />
                </div>
            </div>
            <Collage collage={collage} />
        </>
    )

}