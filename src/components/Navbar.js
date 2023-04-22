import React from 'react';
import {BsCaretDown} from 'react-icons/bs'
import './Navbar.css'

function Navbar() {
  return (
    <div id='header'>
      <a href='/' id='home'>Home</a>
        <a href='/calendar' id='mycalendar'>My Calendar</a>
        <div id="drop">
          <button id="widgets">Widgets <BsCaretDown /></button>
          <div class="w">
            <a href="/calendar" id="calendar">Calendar</a>
            <a href="/dashboard" id="dashboard">Dashboard</a>
            <a href="/reports" id="reports">Reports</a>
          </div>
        </div>
        <img id="img" src='https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0='></img>
    </div>
  );
}

export default Navbar;
