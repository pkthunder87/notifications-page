function NotificationsTop() {
  return (
    <div className="mb-4 mt-4 flex items-center justify-between bg-white">
      <div className=" mb-2 flex items-center gap-3 font-extrabold">
        <span className="text-xl sm:mt-[2px] sm:text-[1.5rem]">
          Notifications
        </span>
        <span className="flex h-7 w-9 items-center justify-center rounded-md bg-blue text-lg text-white sm:h-[1.6rem] sm:w-8 sm:text-base">
          3
        </span>
      </div>
      <div className="text-extrabold mb-2 flex text-base text-dark-grayish-blue hover:cursor-pointer hover:text-blue sm:text-base">
        Mark all as read
      </div>
    </div>
  );
}

export default NotificationsTop;
