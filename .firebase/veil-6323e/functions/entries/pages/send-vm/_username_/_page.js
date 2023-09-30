import { e as error } from "../../../../chunks/index.js";
import { d as db } from "../../../../chunks/firebaseConfig.js";
import { collection, query, where, getDocs } from "firebase/firestore";
async function load({ params }) {
  const usernameRef = collection(db, "users");
  const usernameQuery = query(usernameRef, where("username", "==", params.username));
  const usernameQuerySnapshot = await getDocs(usernameQuery);
  if (usernameQuerySnapshot.empty) {
    throw error(404, { message: "Oops! User does not exist." });
  }
}
export {
  load
};
