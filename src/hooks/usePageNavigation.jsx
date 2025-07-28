import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useFormValidation } from "../context/FormValidationContext";

export default function usePageNavigation() {
  const { index } = useParams();        
  const navigate = useNavigate();
  const { userData, setUserData } = useUser();
  const { validationStatus } = useFormValidation();

  const page = Math.max(1, parseInt(index ?? "1", 10) || 1);

  const next  = () => navigate(`/page/${page + 1}`);
  const prev  = () => navigate(`/page/${page - 1}`);

  const goNext = () => {
    const currentPage = parseInt(page);
    if (!validationStatus[currentPage]) return;
    setUserData(prev => ({ ...prev, lastVisitedPage: page }));
    sessionStorage.setItem("lastVisitedPage", page);
    next();
  };

  // const goPrev = () => {
  //   setUserData(prev => ({ ...prev, lastVisitedPage: page }));
  //   sessionStorage.setItem("lastVisitedPage", page);
  //   prev();
  // };

  const goPrev = () => {
  const currentPage = parseInt(page);
  const prevPage = (currentPage - 1).toString();

  setUserData(prev => ({ ...prev, lastVisitedPage: prevPage }));
  sessionStorage.setItem("lastVisitedPage", prevPage);

  prev(); // Now actually go to previous
};


  return { page, next, prev, goNext,goPrev };
}
