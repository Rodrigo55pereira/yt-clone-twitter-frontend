import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
  id: 1,
  user: user,
  body: "Este é um tweet de exemplo para testar a interface do Twitter clone! 🚀",
  image:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  likeCount: 123,
  commentCount: 45,
  retweetCount: 12,
  liked: true,
  retweeted: false,
  dataPost: new Date(2024, 8, 1, 10, 0, 0),
};
