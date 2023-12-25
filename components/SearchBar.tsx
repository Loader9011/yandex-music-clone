import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaSearch } from "react-icons/fa";

interface SyntheticEvent<T> {
    currentTarget: EventTarget & T;
}

interface SearchBarProps{
    placeholder: string
    className: string
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder,
    className
}
) => {
    function Search(e: React.ChangeEvent<HTMLInputElement>){
        let value = e.target.value
        console.log(value)
    }
    return(
    <div className='flex items-center px-4
    border-b-1
    border-white
    border-solid'>
        <FaSearch className='ml-9' />
        <input onChange={Search} className={
            twMerge(`
            flex
            items-center
            w-full
            bg-transparent
            outline-none
            p-5`, className)} placeholder="Поиск"
        />
    </div>
        
    )

}

export default SearchBar;