import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi, fetchTagFromApi } from "../utils/api";

export const DataContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState("loading");
  const [searchResults, setSearchResults] = useState();
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState(null);
  const [side, setSide] = useState(false);
  const [large, setLarge] = useState(false);
  const [cartcomp, setCartComp] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const fetchCategories = async () => {
    setLoading(true);
    const data = await fetchDataFromApi('home');
    data && setCartComp([data.filters])
    setLoading(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const fetchSelectedCaregoryData = async (query) => {
    setLoading(true);
    const data = await fetchDataFromApi(query);
    data && setSearchResults([data.data])
    console.log('zzz', searchResults)
    setLoading(false);
  };
  useEffect(() => {
    fetchSelectedCaregoryData(selectedCategory.toLowerCase());
  }, [selectedCategory]);


  useEffect(() => {
    fetchCategories();

  }, []);
  useEffect(() => {
    console.log('kkkk', cartcomp, searchResults)
  }, [cartcomp])
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root").classList.add("dark");
    } else {
      document.getElementById("root").classList.remove("dark");
    }
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
        theme,
        setTheme,
        side,
        setSide,
        large,
        setLarge,
        cartcomp,
        setCartComp,
        windowWidth,
        setWindowWidth
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
