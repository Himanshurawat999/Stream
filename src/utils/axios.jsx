import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTBkYmRlYmZjZWI0NzIyMWJhYTliMmE4ZDE0OWRmOSIsIm5iZiI6MTc0MDEyODIzOC4wNSwic3ViIjoiNjdiODNmZWU3NDM0MjAwYzI4MjI3NDY1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9._8XhykcfbsvsIFWMy9-f7NUIKnmeEO0RQizrGgz3P9o",
  },
});

export default instance;
