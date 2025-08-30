import { Tweet } from "@/types/tweet";
import Link from "next/link";

type TweetItemProps = {
  tweet: Tweet;
};

const TweetItem = ({ tweet }: TweetItemProps) => {
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div className="">
        <Link href={`/${tweet.user.slug}`}>
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-full"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="">...</div>
        <div className="py-4 text-lg">{tweet.body}</div>
      </div>
    </div>
  );
};

export default TweetItem;
