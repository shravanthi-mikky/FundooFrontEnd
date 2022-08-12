import React from 'react'
import './header.css'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';

import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div class='main'>
      <div class='header'>
        <div class='icon part-one'>
            <DehazeOutlinedIcon/>
            <div class='keep'>Keep</div>
        </div>
        <div class='icon1 part-two'>
            <input placeholder="Search" class='searchBar' ></input>
            <div class='search-icon'><SearchIcon /></div>
        </div>
        <div class='icon part-three'>
          <RefreshIcon/>
          <SplitscreenIcon/>
          <SettingsOutlinedIcon/>
        </div>
        <div class='icon part-four'>
          <AppsRoundedIcon/>
          <AccountCircleIcon/>
        </div>
      </div>

    </div>
  )
}

export default Header
