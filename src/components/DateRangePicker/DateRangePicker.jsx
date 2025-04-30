import React, { useState } from 'react';
import './styles.css'

export default function DateRangePicker({
  initialStart = null,
  initialEnd = null,
  onApply,
  onCancel
}) {
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);
  const [hoverDate, setHoverDate] = useState(null);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function changeMonth(offset) {
    let m = currentMonth + offset;
    let y = currentYear;
    if (m < 0) { m = 11; y--; }
    else if (m > 11) { m = 0; y++; }
    setCurrentMonth(m);
    setCurrentYear(y);
  }

  function handleDateClick(day) {
    const date = new Date(currentYear, currentMonth, day);
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else setEndDate(date);
    }
  }

  function inRange(day) {
    if (!startDate) return false;
    const d = new Date(currentYear, currentMonth, day);
    if (!endDate && hoverDate) {
      const [min,max] = startDate < hoverDate ? [startDate, hoverDate] : [hoverDate, startDate];
      return d >= min && d <= max;
    }
    if (startDate && endDate) return d >= startDate && d <= endDate;
    return false;
  }

  function renderDays() {
    const cells = [];
    const firstDow = new Date(currentYear, currentMonth, 1).getDay();
    const dim = daysInMonth(currentYear, currentMonth);
    for (let i=0; i<firstDow; i++) cells.push(<div key={`e${i}`} className="drp-cell empty"/>);
    for (let d=1; d<=dim; d++) {
      const isStart = startDate?.getDate()===d && startDate?.getMonth()===currentMonth;
      const isEnd = endDate?.getDate()===d && endDate?.getMonth()===currentMonth;
      cells.push(
        <div key={d}
          className={`drp-cell ${isStart? 'start':''} ${isEnd? 'end':''} ${inRange(d)? 'range':''}`}
          onClick={()=>handleDateClick(d)}
          onMouseEnter={()=>setHoverDate(new Date(currentYear,currentMonth,d))}
          onMouseLeave={()=>setHoverDate(null)}
        >{d}</div>
      );
    }
    return cells;
  }

  return (
    <div className="drp-container">
      <div className="drp-header">
        <button onClick={()=>changeMonth(-1)}>‹</button>
        <select value={currentMonth} onChange={e=>setCurrentMonth(+e.target.value)}>
          {Array.from({length:12}).map((_,i)=><option key={i} value={i}>{new Date(0,i).toLocaleString('default',{month:'long'})}</option>)}
        </select>
        <select value={currentYear} onChange={e=>setCurrentYear(+e.target.value)}>
          {Array.from({length:10}).map((_,i)=>{const y=today.getFullYear()-5+i;return <option key={y}>{y}</option>;})}
        </select>
        <button onClick={()=>changeMonth(1)}>›</button>
      </div>
      <div className="drp-weekdays">{'Su Mo Tu We Th Fr Sa'.split(' ').map(d=><div key={d}>{d}</div>)}</div>
      <div className="drp-days">{renderDays()}</div>
      <div className="drp-footer">
        <button className="drp-cancel" onClick={onCancel}>Cancel</button>
        <button className="drp-done" onClick={()=>onApply({startDate,endDate})}>Done</button>
      </div>
    </div>
  );
}