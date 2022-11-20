import React, { useEffect, useState } from "react";

function Timeline() {
  const [data, setData] = useState({});
  const [goal, setGoal] = useState({});
  const [receivedPosts, setReceivedPosts] = useState([]);

  function updatePost(event) {
    setData(event.target.value);
  }
  function updateGoal(event) {
    setGoal(event.target.value);
  }
  useEffect(() => {
    getAllUserPosts();
  }, []);
  function getAllUserPosts() {
    fetch("/GetAllUserPosts")
      .then((res) => res.json())
      .then((data) => {
        setReceivedPosts(data.message);
        console.log(data);
      });
  }

  function savePost() {
    const allData = [{ posts: data, goal: goal }];
    setReceivedPosts((prevState) => [...prevState, allData[0]]);

    console.log(allData);
    fetch("/yourtimeline", {
      method: "POST", // or 'PUT',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        // getAllUserPosts();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div style={{ width: "120rem" }}>
      <h1>Your Timeline</h1>
      <label>Insight: </label>
      <textarea
        placeholder="What did you learn?"
        onChange={updatePost}
      ></textarea>
      <span style={{ margin: "2rem" }}></span>
      <label>Goal</label>
      <textarea
        placeholder="What goal is this under (should be select options)"
        onChange={updateGoal}
      ></textarea>
      <button onClick={savePost}>Save</button>
      {/* <p>{data.post}</p>
      <p>{goal.goal}</p> */}

      {receivedPosts.reverse().map((item) => (
        <div
          style={{
            padding: "0",
            margin: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "15rem",
              width: "40rem",
              border: "solid",
              margin: "2rem 0",
            }}
          >
            <h1>Your highlight</h1>
            <p>{item.posts}</p>
            <p style={{ color: "red" }}>{item.goal}</p>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Timeline;
