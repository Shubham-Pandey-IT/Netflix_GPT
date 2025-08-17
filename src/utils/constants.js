export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PHOTO_URL =
  "https://avatars.githubusercontent.com/u/147554321?v=4&size=64";

export const NET_BODY_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:"Bearer " + import.meta.env.VITE_TMDB_KEY,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const Netflix_GPT_URL =
  "https://media.licdn.com/dms/image/v2/D4E05AQHUx93oDwKZcA/videocover-low/videocover-low/0/1715762291111?e=2147483647&v=beta&t=J7clR0QY6v8GoEWaAAp3nlDxwmIk082f2VLoWeeDDZM";

export const OPEN_AI_KEY = import.meta.env.VITE_OPENAI_KEY;
