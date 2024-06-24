import { useState, useEffect } from "react";

export const useIsMobile = (): { isMobile: boolean; isChecking: boolean } => {
  const [state, setState] = useState({ isMobile: false, isChecking: true });

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobileRegExp =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
    const isMobile = !!userAgent.match(mobileRegExp);
    setState({ isMobile, isChecking: false });
  }, []);

  return state;
};
