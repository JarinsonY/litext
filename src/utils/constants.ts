const BASE_URL_API =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://" + window.location.hostname + ":4000";

export { BASE_URL_API };
