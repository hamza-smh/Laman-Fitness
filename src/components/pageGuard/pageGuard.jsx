// src/components/pageGuard/PageGuard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageGuard = ({ children, pageNumber }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedStatus = JSON.parse(localStorage.getItem("validationStatus") || "{}");

    // If current page is valid, allow access
    if (storedStatus[pageNumber]) return;

    // Find the first invalid page and redirect there
    for (let i = 1; i <= 38; i++) {
      if (storedStatus[i] === false || storedStatus[i] === undefined) {
        navigate(`/page/${i}`);
        return;
      }
    }

    // Fallback to page 1
    navigate("/page/1");
  }, [pageNumber, navigate]);

  return <>{children}</>;
};

export default PageGuard;

