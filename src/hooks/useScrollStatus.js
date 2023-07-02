import {
    useEffect,
    useState,
} from "react";

const useScrollStatus = () => {
    const [isScrolled, setIsScrolled] =
        useState(false);
    const handleScroll = () => {
        const scrolled =
            window.scrollY > 0;
        setIsScrolled(scrolled);
    };
    useEffect(() => {
        window.addEventListener(
            "scroll",
            handleScroll
        );
        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    return isScrolled;
};

export default useScrollStatus;
