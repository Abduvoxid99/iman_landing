import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from '@material-ui/icons/Search';
// import { SearchIcon } from "../Icons";
import cls from './SearchBar.module.scss'
import { useTranslation, i18n } from "next-i18next";
// import Fuse from 'fuse.js'


function SearchBar({ placeholder, data, setListData,filteredData ,setfilteredData, text, setText, handleFilter , clearInput}) {

  const { t } = useTranslation("common");
  // const questionArray = searchData.forEach(function(el){
  //   el.child.map((item)=> item.question)
  // })
  // const questionArray = searchData.map((el) => el.child.map((el) => el.question));
  // console.log("QUESTION TO FILTER", questionArray);
  
  
  return (
    <div className={cls.roots}>
        <div className={cls.search}>
          <div className={cls.searchItems}>
            <div className={cls.searchIcons}>
              {filteredData.length !== 0 ? (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              ) : (
                <SearchIcon />
              )}
            </div>
            <input
              type="text"
              placeholder={placeholder}
              value={text}
              onChange={handleFilter}
            />
             {/* <button className={cls.searchButton} onClick={handleFilter} type='button'>{t('Search')}</button> */}
          </div>
          {/* {filteredData.length !== 0 && (
            <div className="searchList">
              {filteredData.map((value, ind) => (
                <a href="#panel1a-header" key={ind}>
                  {value}
                </a>
              ))}
            </div>
          )} */}
        </div>
    </div>
  );
}

export default SearchBar;
