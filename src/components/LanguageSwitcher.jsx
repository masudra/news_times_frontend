import { useNavigate, useLocation } from "react-router-dom";
import i18n from "i18next";
import { useContext, useMemo } from "react";
import { BlogContext } from "../context/BlogContext";

const LanguageSwitcher = () => {
    const { blogs } = useContext(BlogContext);
    const navigate = useNavigate();
    const location = useLocation();

    const categoryMap = useMemo(() => {
        return blogs
            .map(blog => blog.category)
            .filter(cat => typeof cat === "object" && cat.en && cat.bn)
            .reduce((acc, cat) => {
                const exists = acc.find(item => item.en === cat.en || item.bn === cat.bn);
                if (!exists) acc.push(cat);
                return acc;
            }, []);
    }, [blogs]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

        const currentSlug = decodeURIComponent(location.pathname.split("/")[1]);
        const matchedCategory = categoryMap.find(
            (cat) => cat.en === currentSlug || cat.bn === currentSlug
        );

        if (matchedCategory) {
            const newSlug = lng === "en" ? matchedCategory.en : matchedCategory.bn;
            navigate(`/${encodeURIComponent(newSlug)}`);
        } else {
            console.warn("No matched category for slug:", currentSlug);
        }
    };

    return (
        <div >

        </div>
    );
};

export default LanguageSwitcher;
