const BASE_URL_API =
    process.env.NODE_ENV === "development"
        ? "http://192.168.10.22:4000"
        : "http://" + window.location.hostname + ":4000";

export { BASE_URL_API };
