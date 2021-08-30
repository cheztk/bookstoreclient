const environmentUrls = new Map();

environmentUrls.set("localhost", "http://localhost:8080");
environmentUrls.set(
    "book-store-web-ck.herokuapp.com",
    "https://book-store-ck.herokuapp.com"
);

export default environmentUrls.get(window.location.hostname);
