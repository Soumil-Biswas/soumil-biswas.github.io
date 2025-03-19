import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home | Soumil Biswas",
      "/Development": "Development | Soumil Biswas",
      "/Design": "Design | Soumil Biswas",
      "/About": "About | Soumil Biswas",
      "/Contact": "Contact | Soumil Biswas",
    };
    document.title = titles[location.pathname] || "My Website";
  }, [location.pathname]);
};

export default PageTitle;
