async function getData() {
  const url = "https://randomuser.me/api/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(response);

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
getData();

console.log(
  new Promise((resolve, reject) => {
    resolve("resolved");
  })
);
