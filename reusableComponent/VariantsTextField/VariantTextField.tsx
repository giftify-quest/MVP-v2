'use client'


import styles from "./styles.module.scss";
import classNames from "classnames";



interface VariantTextFieldProps {
    text:string,
    isSelected:boolean
    onChooseVariant:(id:string, correct:boolean, text:string) =>void
}


export const VariantTextField:React.FC<VariantTextFieldProps> = ({ text }) => {
    const shouldDisplayAsColumn = text.length > 20;
  

    return (
        <div className={`${styles.wrapper} ${shouldDisplayAsColumn ? styles.column : ''}`}>
            <div className={styles.text}>
            
                {text}
            </div>
        </div>
    );
};

export default VariantTextField;



