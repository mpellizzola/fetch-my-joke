export type Joke = {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

export const joke: Joke = {
  error: false,
  category: "Programming",
  type: "single",
  joke: "I asked Git why it never laughs. It said every joke I write ends up in the stash.",
  flags: {
    nsfw: false,
    religious: false,
    political: false,
    racist: false,
    sexist: false,
    explicit: false,
  },
  id: 18,
  safe: true,
  lang: "en",
};
