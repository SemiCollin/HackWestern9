const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://jeffrey:<password>@cluster0.emywofb.mongodb.net/HACKWESTERN?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect();
// client
//   .db("HACKWESTERN")
//   .collection("Users")
//   .updateMany({}, { $set: { postsFeed: [{ posts: "", goal: "" }] } });
// db.yourCollection.updateMany({}, { $set: { someField: "someValue" } });

async function create(firstname, username, password) {
  const result = await client.db("HACKWESTERN").collection("Users").insertOne({
    firstname: firstname,
    username: username,
    password: password,
  });

  if (result) {
    console.log(result);
    return;
  } else {
    console.log(`Error Creating User`);
  }
}

async function read(username) {
  const result = await client.db("HACKWESTERN").collection("Users").findOne({
    username: username,
  });

  if (result) {
    console.log(result);
    return result;
  } else {
    console.log(`No Listings Found With that Name`);
  }
}

async function update(username, goal) {
  const result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .updateOne({ username: username }, { $set: { goal: goal } });

  if (result) {
    console.log(result);
    return;
  } else {
    console.log(`Error Updating Goal`);
  }
}

async function destroy(username) {
  const result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .deleteOne({ username: username });

  if (result) {
    console.log(result);
    return;
  } else {
    console.log(`Error Deleting User`);
  }
}

async function savePosts(username, posts) {
  let user = await client
    .db("HACKWESTERN")
    .collection("Users")
    .findOne({ username: username });
  //   console.log(posts);
  //   console.log(user);
  const postDataObject = { posts: posts.posts, goal: posts.goal };

  let result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .updateOne(
      { username: username },
      {
        $push: { postsFeed: postDataObject },
      }
    );

  if (result) {
    console.log(result);
  } else {
    console.log(`Save failed`);
  }
}

async function getAllUserPosts(username) {
  //   const result = await client.db("HACKWESTERN").collection("Users").save(posts);
  // username = "jefftheli";
  //   username = typeof username !== "undefined" ? "jefftheli" : username;
  let result = await client
    .db("HACKWESTERN")
    .collection("Users")
    .findOne({ username: username });
  console.log(username);
  if (result) {
    console.log("hello");
    console.log(result.postsFeed);
    return result.postsFeed;
  } else {
    console.log(`Get failed`);
  }
}

module.exports = {
  savePosts,
  create,
  read,
  update,
  destroy,
  getAllUserPosts,
};
