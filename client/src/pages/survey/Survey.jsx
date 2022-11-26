// import { useCallback } from "react";
// import "survey-core/modern.min.css";
// import { StylesManager, Model } from "survey-core";
// import { Survey } from "survey-react-ui";
// import { useNavigate } from "react-router-dom";

// StylesManager.applyTheme("modern");
// const surveyJson = {
//   elements: [
//     // {
//     //   name: "FirstName",
//     //   title: "Enter your first name:",
//     //   type: "text",
//     // },
//     // {
//     //   name: "LastName",
//     //   title: "Enter your last name:",
//     //   type: "text",
//     // },
//     {
//       name: "Aspiration",
//       title: "Enter your aspiration:",
//       type: "text",
//     },
//   ],
// };

import "./survey.scss";

function App() {
  // const [goal , setGoal] = useState();
  
  // const navigate = useNavigate();

  // function updateGoal(event) {
  //   setGoal(event.target.value);
  // }

  // const survey = new Model(surveyJson);
  // const alertResults = useCallback((sender) => {
  //   const results = JSON.stringify(sender.data);
  //   alert(results);
  // }, []);

  // survey.onComplete.add(alertResults);

  return (<div class="container">
  
  <div class="demo-flex-spacer"></div>

  <div class="webflow-style-input">
    <input class="" type="email" placeholder="What will you become?"></input>
    {/* <button type="submit"><i class="icon ion-android-arrow-forward"></i></button> */}
    <button className="loginButton">>>></button>
  </div>

  <div class="demo-flex-spacer"></div>

  </div>);
}

export default App;
