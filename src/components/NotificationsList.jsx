import NotificationItem from './NotificationItem';

function NotificationsList() {
  return (
    <div className="flex flex-col gap-2 bg-white ">
      <NotificationItem
        profilePic="./avatar-mark-webber.webp"
        profileName="Mark Webber"
      />
      <NotificationItem
        profilePic="./avatar-angela-gray.webp"
        profileName="Angela Gray"
      />
      <NotificationItem
        profilePic="./avatar-jacob-thompson.webp"
        profileName="Jacob Thompson"
      />
      <NotificationItem
        profilePic="./avatar-rizky-hasanuddin.webp"
        profileName="Rizky Hasanuddin"
      />
      <NotificationItem
        profilePic="./avatar-kimberly-smith.webp"
        profileName="Kimberly Smith"
      />
      <NotificationItem
        profilePic="./avatar-nathan-peterson.webp"
        profileName="Nathan Peterson"
      />
      <NotificationItem
        profilePic="./avatar-anna-kim.webp"
        profileName="Anna Kim"
      />
    </div>
  );
}

export default NotificationsList;
