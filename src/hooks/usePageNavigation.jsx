import { useParams, useNavigate } from "react-router-dom";

export default function usePageNavigation() {
  const { index } = useParams();        
  const navigate = useNavigate();

  const page = Math.max(1, parseInt(index ?? "1", 10) || 1);

  const next  = () => navigate(`/page/${page + 1}`);
  const prev  = () => navigate(`/page/${page - 1}`);

  return { page, next, prev };
}
