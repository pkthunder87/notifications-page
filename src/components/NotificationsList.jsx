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
        adjustPicture={true}
        marginTop="sm:mt-0 -mt-8"
      />
      <NotificationItem
        profilePic="./avatar-angela-gray.webp"
        profileName="Angela Gray"
        reaction="followed you"
        timestamp="5m ago"
      />
      <NotificationItem
        profilePic="./avatar-jacob-thompson.webp"
        profileName="Jacob Thompson"
        reaction="has joined your group"
        timestamp="1 day ago"
        headline="Chess Club"
        link="cursor-pointer text-blue"
        adjustPicture={true}
        marginTop="sm:-mt-2 -mt-8"
      />
      <NotificationItem
        profilePic="./avatar-rizky-hasanuddin.webp"
        profileName="Rizky Hasanuddin"
        reaction="sent you a private message"
        timestamp="5 days ago"
        activeMessage={activeMessage}
        unread={false}
        adjustPicture={true}
        marginTop="-mt-8 sm:-mt-2"
      />
      <NotificationItem
        profilePic="./avatar-kimberly-smith.webp"
        profileName="Kimberly Smith"
        reaction="commented on your picture"
        timestamp="1 week ago"
        unread={false}
        picture="./image-chess.webp"
        marginTop="sm:-mt-12   -mt-8"
        adjustPicture={true}
      />
      <NotificationItem
        profilePic="./avatar-nathan-peterson.webp"
        profileName="Nathan Peterson"
        reaction="reacted to your recent post"
        timestamp="2 weeks ago"
        headline="5 end-game strategies to increase your win rate"
        marginTop="sm:-mt-8 -mt-14"
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
