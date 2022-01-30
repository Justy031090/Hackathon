import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import "../Home/Home.css";

const TEXTS = [
  `Welcome to the PlaceHolder, the site was built in order to solve the
language barrier that exists communities we have in our country, so
feel free to search for any song you like and translate it into your
own language`,
  `          مرحبا الى الاسم , هذا الموقع بني من اجل ان يحل مشكلة اللغة التي موجودة
  في دولتنا , اشعر بالحرية ببحث عن اغنية وترجمتها الى لغتك`,
  `
  Добро пожаловать в PlaceHolder, сайт был создан для того что бы преодолеть языковой барьер,
   который существует в сообществах, которые есть в нашей стране, поэтому не стесняйтесь искать
    любую понравившуюся песню и переводить её на свой язык`,
  `ברוכים הבאים לפלייסהולדר , האתר נבנהברוכים הבאים לאתר, האתר נבנה לטובת 
  לפתור את מחסום השפה שיש בקהילות הרבות שיש לנו במדינה,
   אז תרגישו חופשיים לחפש שיר שאתם אוהבים ותתרגמו אותו לשפה שנוחה רק לכם 
  ברוכים הבאים לאתר, האתר נבנה לטובת לפתור את מחסום השפה שיש בקהילות הרבות שיש לנו במדינה,
   אז תרגישו חופשיים לחפש שיר שאתם אוהבים ותתרגמו אותו לשפה שנוחה רק לכם `,
];

const Home = () => {
  const [index, setIndex] = useState(0);
  let textStyle = {};

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const isHebrew = (text) => {
    return text.search(/[\u0590-\u05FF]/) >= 0;
  };
  if (isHebrew(TEXTS[index % TEXTS.length])) {
    textStyle = {
      textAlign: "right",
    };
  }

  return (
    <div className="home-container">
      <h1 className="home-title">PlaceHolder </h1>
      <div className="home-content" style={textStyle}>
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.gentle}
        />
      </div>
    </div>
  );
};

export default Home;
