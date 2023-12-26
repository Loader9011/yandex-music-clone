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
    function SearchClicked(){
        const line = document.querySelector("#line");
        line?.classList.remove('border-b-slate-600');
        line?.classList.add('border-b-slate-300')
        
    }
    return(
    <div id="line" className='flex items-center px-4
    border-b-2
    w-full
    border-b-slate-600
    border-white
    border-solid'>
        <FaSearch className='ml-9' />
        <input onFocus={SearchClicked} type="text" onChange={Search} className={
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