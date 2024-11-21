import { useState, useMemo } from "react";

export const useLoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showLoader = () => setIsVisible(true);
  const hideLoader = () => setIsVisible(false);

  const loader = useMemo(() => {
    if (!isVisible) return <></>;

    return <>Loading...</>;
  }, [isVisible]);

  return [loader, showLoader, hideLoader];
};
