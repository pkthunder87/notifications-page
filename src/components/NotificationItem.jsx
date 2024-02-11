function NotificationItem() {
  return (
    <div className="grid h-[12.5%] w-full grid-cols-[10%_90%] grid-rows-2 items-center gap-x-4 rounded-lg bg-very-light-grayish-blue p-2">
      <div className="row-span-2 ml-2">
        <img
          className="h-12 w-12"
          src="./avatar-mark-webber.webp"
          alt="Profile image"
        />
      </div>
      <div className=" -ml-1 mt-2 self-start text-wrap text-base">
        <span className="font-extrabold">Mark Webber</span>
        <span className="ml-2 text-dark-grayish-blue">
          reacted to your recent post
        </span>
        <span className="ml-2 font-extrabold text-dark-grayish-blue">
          My first tournament today!
        </span>
        <span className="">
          <div className=" inline-block h-3 w-3 scale-50 rounded-full bg-red"></div>
        </span>
      </div>
      <div className="-ml-1 -mt-1 text-base text-dark-grayish-blue">1m ago</div>
    </div>
  );
}

export default NotificationItem;
