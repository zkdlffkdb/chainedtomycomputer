import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Chapter2.css";

export const Chapter2 = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/chapter_3';
    navigate(path);
  }

  return (
    <div>Chapter 2</div>
  )
}
