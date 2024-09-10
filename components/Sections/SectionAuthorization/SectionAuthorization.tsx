"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import style from "./styles.module.scss";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import Cookies from "js-cookie";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { authPageData } from "@/testContent/authPage/authPage";
import { testTemplateQuest } from "@/testContent/templateQuest/templateQuest";

export const SectionAuthorization: React.FC = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleAuthorization = () => {
    const correctCode = testTemplateQuest.password;

    if (code === correctCode) {
      Cookies.set("isAuthorized", "true", { expires: 7 });
      router.push("/quest");
    } else {
      setError(true);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
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
          />
        </div>
        <div className={style.headerText}>{authPageData.header}</div>
        <div className={style.textBlock}>
          <span>{authPageData.title}</span>
          <span>
            {authPageData.titleText2} <span className={style.info}>ℹ️</span>
          </span>
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
            isError={error}
          />
          <ButtonConfirm
            title={authPageData.buttonText}
            onClick={handleAuthorization}
            isActive={code.length > 0}
          />
        </div>
      </div>
    </WrapperWithBackground>
  );
};
