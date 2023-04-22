import React from 'react';
import {FaRegCalendarAlt} from 'react-icons/fa'
import {MdOutlineDashboard} from 'react-icons/md'
import {BsBarChart} from 'react-icons/bs'
import './Sidebar.css'

function Sidebar() {
  return (
    <div id='leftpage'>
        <a href='/calendar' id='calendar'><FaRegCalendarAlt style={{ marginRight: '15px' }}/> Calendar</a><br></br>
        <a href='/dashboard' id='dashboard'><MdOutlineDashboard style={{ marginRight: '15px' }}/> Dashboard</a><br></br>
        <a href='/reports' id='reports'><BsBarChart style={{ marginRight: '15px' }}/> Reports</a>
    </div>
  );
}

export default Sidebar;
