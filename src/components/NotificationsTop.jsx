function NotificationsTop() {
  return (
    <div className="flex items-center justify-between bg-white">
      <div className=" mb-2 flex gap-3 font-extrabold">
        <span className=" text-[1.7rem]">Notifications</span>
        <span className="flex h-8 w-10 items-center justify-center rounded-lg bg-blue text-xl text-white">
          3
        </span>
      </div>
      <div className="text-extrabold flex text-lg text-dark-grayish-blue">
        Mark all as read
      </div>
    </div>
  );
}

export default NotificationsTop;
