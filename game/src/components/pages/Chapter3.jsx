import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Chapter3.css";

export const Chapter3 = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/epilogue';
    navigate(path);
  }

  return (
    <div>Chapter 3</div>
  )
}
