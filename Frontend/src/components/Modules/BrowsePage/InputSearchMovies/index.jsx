import React from "react";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { searchMoviesAtom } from "../../../../jotai/atoms";

const InputSearchMovies = () => {
    const [isShow, setIsShow] = useState(false);
    const [, setSearchMovie] = useAtom(searchMoviesAtom);

    const handleChanges = (e) => {
        if(e.target.value.length > 3) {
            setSearchMovie(e.target.value)
        }
        else{
            setSearchMovie(null)
        }
    }

    return (
        <div className="relative">
            <motion.input
                initial={{ translateX: -20 }}
                animate={{ translateX: isShow ? 0 : -20 }}
                className="bg-black-border border-white py-2 pl-12"
                style={{ display: isShow ? "block" : "none" }}
                placeholder="Title, people, genres, ..."
                onChange={handleChanges}
            />
            <GoSearch
                className={isShow ? "absolute top-1/2 -translate-y-1/2 left-3 z-20" : ""}
                onClick={() => setIsShow(!isShow)}
            />
        </div>
    );
};

export default InputSearchMovies;
