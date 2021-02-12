const content = [
  {
    name: "Sign-in",
    firebase: "Auth",
    type: "POST",
    for: "Admin Volunteer",
    method: "signInWithEmailAndPassword",
    auth: false,
    info: `Used to sign in admins (dashboard) or volunteers (app)

Parameters: email - password`,
  },
  {
    name: "Sign-up",
    firebase: "Auth",
    type: "POST",
    for: "Volunteer",
    method: "createUserWithEmailAndPassword",
    auth: false,
    info: `Used to create new volunteer accounts

Parameters: email - password`,
  },
  {
    name: "Sign-out",
    firebase: "Auth",
    type: "POST",
    for: "Admin Volunteer",
    method: "signOut",
    auth: true,
    info: `Used to sign admins and volunteers out`,
  },
  {
    name: "Reset Password",
    firebase: "Auth",
    type: "POST",
    for: "Volunteer",
    method: "sendPasswordResetEmail",
    auth: false,
    info: `Used to reset a volunteer’s password

Parameters: email`,
  },
  {
    name: "Festival info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin General",
    method: `collection(“festival_year").doc(“festival_id”).get()`,
    auth: false,
    info: `Used to get data about a specific festival`,
  },
  {
    name: "Act info/ Saved Artist info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin General",
    method: `collection(“acts").doc(“act_id”).get()
collection(“saved_artists").doc(“artist_id”).get()
`,
    auth: false,
    info: `Used to get data about a specific act or saved artist`,
  },
  {
    name: "Event info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin General",
    method: `collection(“events").doc(“event_id”).get()`,
    auth: false,
    info: `Used to get data about a specific event outside of festival`,
  },
  {
    name: "Song info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin General",
    method: `collection("songs").doc(“song_id”).get()`,
    auth: false,
    info: `Used to get data about a specific song`,
  },
  {
    name: "Photo info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin General",
    method: `collection("photos").doc(“photo_id”).get()`,
    auth: false,
    info: `Used to get data about a specific photo`,
  },
  {
    name: "Video info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin General",
    method: `collection(“videos").doc(“video_id”).get()`,
    auth: false,
    info: `Used to get data about a specific video on Youtube`,
  },
  {
    name: "Volunteer info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin Volunteer",
    method: `collection(“volunteers").doc(“volunteer_id”).get()`,
    auth: true,
    info: `Used to get data about a specific volunteer`,
  },
  {
    name: "Tasks list",
    firebase: "Firestore",
    type: "GET",
    for: "Admin Volunteer",
    method: `collection(“volunteers").doc(“volunteer_id”).get()`,
    auth: true,
    info: `Used to get a list of all volunteer tasks`,
  },
  {
    name: "Task info",
    firebase: "Firestore",
    type: "GET",
    for: "Admin Volunteer",
    method: `collection(“tasks").doc(“task_id”).get()`,
    auth: true,
    info: `Used to get data about a task of volunteers`,
  },
  {
    name: "Poll info",
    firebase: "Firestore",
    type: "GET",
    for: "General",
    method: `collection(“polls").doc(“poll_id”).get()`,
    auth: false,
    info: `Used to get data about a poll`,
  },
  {
    name: "Playlist info",
    firebase: "Firestore",
    type: "GET",
    for: "General",
    method: `collection(“playlists").doc(“poll_id”).get()`,
    auth: false,
    info: `Used to get data about a playlist`,
  },
  {
    name: "Add Festival",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“festival_year").doc(“festival_id”).set({})`,
    auth: true,
    info: `Used to add a new festival

Parameters: events - description - start_date - end_date - location`,
  },
  {
    name: "Add Act",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“acts").doc(“act_id”).set({})`,
    auth: true,
    info: `Used to add a new act

Parameters: type - description - videos - songs - main_image - social_media - photos - name - event_id`,
  },
  {
    name: "Add Event",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“events").doc(“event_id”).set({})`,
    auth: true,
    info: `Used to add a new event outside of festival

Parameters: line_up - photos - location - date`,
  },
  {
    name: "Add Song",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“songs").doc(“song_id”).set({})`,
    auth: true,
    info: `Used to add a new song

Parameters: duration - path - year - description - act_id - title`,
  },
  {
    name: "Add Photo",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(photos").doc(“photo_id”).set({})`,
    auth: true,
    info: `Used to add a new photo

Parameters: path - description - act_id - title`,
  },
  {
    name: "Add Video",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection("videos").doc(“video_id”).set({})`,
    auth: true,
    info: `Used to add a new video

Parameters: duration - path - year - description - act_id - title`,
  },
  {
    name: "Add Task",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“tasks").doc(“task_id”).set({})`,
    auth: true,
    info: `Used to add a new task

Parameters: name - description - volunteers_assigned - start_date - end_date - location`,
  },
  {
    name: "Add Volunteer",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“volunteers").doc(“volunteer_id”).set({})`,
    auth: true,
    info: `Used to add a new volunteer

Parameters: emergency_contacts - email - profile_picture - full_name - tasks - phone_numbers`,
  },
  {
    name: "Add Poll",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“polls").doc(“poll_id”).set({})`,
    auth: true,
    info: `Used to add a new poll

Parameters: title - caption - start_date - end_date - votes`,
  },
  {
    name: "Add Playlist",
    firebase: "Firestore",
    type: "POST",
    for: "Admin",
    method: `collection(“playlists").doc(“playlist_id”).set({})`,
    auth: true,
    info: `Used to add a new playlist

Parameters: title - date - songs`,
  },
  {
    name: "Upload audio/ image",
    firebase: "Storage",
    type: "POST",
    for: "Admin",
    method: `ref(“file_path").put(file)`,
    auth: true,
    info: `Used for admin to upload image, audio to Firebase storage

Parameters: file - song props/ photo props`,
  },
  {
    name: "Get audio/ image",
    firebase: "Storage",
    type: "GET",
    for: "Admin General",
    method: `ref(“file_path").getDownloadURL()`,
    auth: true,
    info: `Used to get an image or audio source`,
  },
];

function init() {
  let table = document.querySelector("#main");
  content.forEach((item) => {
    // let row = document.querySelector(".info");
    let row = document.createElement("tr");
    let name = document.createElement("th");
    name.textContent = item.name;
    item.firebase == "Storage"
      ? name.classList.add("storage")
      : item.firebase == "Firestore"
      ? name.classList.add("firestore")
      : name.classList.add("auth");

    let type = document.createElement("th");
    type.textContent = item.type;
    item.type == "GET" ? type.classList.add("get") : type.classList.add("post");

    let usedFor = document.createElement("th");
    usedFor.textContent = item.for;

    let method = document.createElement("th");
    method.textContent = item.method;
    let auth = document.createElement("th");
    item.auth === true ? auth.classList.add("yes") : auth.classList.add("no");
    auth.textContent = item.auth;

    let info = document.createElement("th");
    info.textContent = item.info;
    row.appendChild(name);
    row.appendChild(type);
    row.appendChild(usedFor);
    row.appendChild(method);
    row.appendChild(auth);
    row.appendChild(info);
    table.appendChild(row);
  });
}
document.addEventListener("DOMContentLoaded", init);
