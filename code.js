var title = localStorage.getItem("title")

if (localStorage.hasOwnProperty("title")) {
    document.title = title
}



function settitle(title) {
  if (title !== "") {
  localStorage.setItem("title", title)
  document.title = title
  } else {
  localStorage.removeItem("title")
  document.title = "\u200E"
  }
}

function setdefault() {
  settitle("School Heaven")
}

