"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import style from "./styles.module.scss";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { authPageData } from "@/testContent/authPage/authPage";
import { testTemplateQuest } from "@/testContent/templateQuest/templateQuest";
import { useIsMobile } from "@/hooks/useIsMobile";

export const SectionAuthorization: React.FC = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  const { isMobile, isChecking } = useIsMobile();

  const handleAuthorization = () => {
    const correctCode = testTemplateQuest.password;

    if (code === correctCode) {
      setIsAuth(true);
      router.push("/quest");
    } else {
      setError(true);
    }
  };

  const formatCode = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");
    let formattedValue = cleanedValue;
    if (cleanedValue.length > 2) {
      formattedValue = `${cleanedValue.slice(0, 2)}-${cleanedValue.slice(2)}`;
    }
    if (cleanedValue.length > 4) {
      formattedValue = `${cleanedValue.slice(0, 2)}-${cleanedValue.slice(2, 4)}-${cleanedValue.slice(4)}`;
    }
    return formattedValue.slice(0, 10);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = formatCode(inputValue);
    setCode(formattedValue);
    setError(false);
  };

  return (
    <WrapperWithBackground
      bgSrc={authPageData.bgDesktop}
      bgMobileSrc={authPageData.bgMobile}
      fullHeight={true}
    >
      <div className={style.wrapper}>
        <div className={style.adviceText}>
          <TextFieldInfo
            mainText={authPageData.adviceText}
            variant={"text"}
            isAuth={true}
            isMobileAnswer={isMobile}
            rotate={-2.53}
          />
        </div>
        <div className={style.headerText}>{authPageData.header}</div>
        <div className={style.textBlock}>
          <span>{authPageData.title}</span>
          <span>{authPageData.titleText2}</span>
        </div>
        {error && (
          <div className={style.errorText}>
            <TextFieldInfo
              mainText={authPageData.errorText}
              variant={"errorMessage"}
            />
          </div>
        )}
        <div className={style.inputBlock}>
          <TextField
            value={code}
            placeholder="XX-XX-XXXX"
            onChange={handleInputChange}
            maxLength={10}
            isError={error}
          />
          <ButtonConfirm
            title={authPageData.buttonText}
            onClick={handleAuthorization}
            isActive={code.length === 10}
          />
        </div>
      </div>
    </WrapperWithBackground>
  );
};
