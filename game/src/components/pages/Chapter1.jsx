import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Chapter1.css";

export const Chapter1 = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/chapter_2';
    navigate(path);
  }

  return (
    <div>Chapter 1</div>
  )
}
