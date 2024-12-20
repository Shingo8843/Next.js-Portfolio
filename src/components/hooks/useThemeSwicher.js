import React, {useState, useEffect, use} from 'react'

const useThemeSwicher = () => {

    const preferDarkQuery = '(prefers-color-scheme: light)';
    const [mode, setMode] = useState('');
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem('theme');
        const handleChange = () => {
            if (userPref){
                let check = userPref === 'light' ? 'light' : 'dark';
                setMode(check);
                if (check === 'dark'){
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
            else{
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);
                if (check === 'dark'){
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        };
        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [])
    useEffect(() => {
        if (mode === 'dark'){
            document.documentElement.classList.add('dark');
            window.localStorage.setItem('theme', 'dark');
        } 
        if(mode === 'light') {
            document.documentElement.classList.remove('dark');
            window.localStorage.setItem('theme', 'light');
        }
    }, [mode, setMode])
  return [mode, setMode]
}

export default useThemeSwicher