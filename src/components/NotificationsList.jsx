import NotificationItem from './NotificationItem';

function NotificationsList() {
  const activeMessage =
    " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.";

  return (
    <div className="flex flex-col gap-2 bg-white ">
      <NotificationItem
        profilePic="./avatar-mark-webber.webp"
        profileName="Mark Webber"
        reaction="reacted to your recent post"
        timestamp="1m ago"
        headline="My first tournament today!"
      />
      <NotificationItem
        profilePic="./avatar-angela-gray.webp"
        profileName="Angela Gray"
        reaction="followed you"
        timestamp="5m ago"
        headline=""
      />
      <NotificationItem
        profilePic="./avatar-jacob-thompson.webp"
        profileName="Jacob Thompson"
        reaction="has joined your group"
        timestamp="1 day ago"
        headline="Chess Club"
        link="cursor-pointer text-blue"
      />
      <NotificationItem
        profilePic="./avatar-rizky-hasanuddin.webp"
        profileName="Rizky Hasanuddin"
        reaction="sent you a private message"
        timestamp="5 days ago"
        headline=""
        activeMessage={activeMessage}
        unread={false}
      />
      <NotificationItem
        profilePic="./avatar-kimberly-smith.webp"
        profileName="Kimberly Smith"
        reaction="commented on your picture"
        timestamp="1 week ago"
        headline=""
        unread={false}
        picture="./image-chess.webp"
        marginTop="-mt-12"
        adjustPicture={true}
      />
      <NotificationItem
        profilePic="./avatar-nathan-peterson.webp"
        profileName="Nathan Peterson"
        reaction="reacted to your recent post"
        timestamp="2 weeks ago"
        headline="5 end-game strategies to increase your win rate"
        marginTop="-mt-6"
        unread={false}
        adjustPicture={true}
      />
      <NotificationItem
        profilePic="./avatar-anna-kim.webp"
        profileName="Anna Kim"
        reaction="left the group"
        timestamp="2 weeks ago"
        headline="Chess Club"
        link="cursor-pointer text-blue"
        unread={false}
      />
    </div>
  );
}

export default NotificationsList;
