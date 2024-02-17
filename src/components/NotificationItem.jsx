function NotificationItem({
  profilePic,
  profileName,
  reaction,
  timestamp,
  headline,
  marginTop = '-mt-4',
  link = '',
  activeMessage = '',
}) {
  return (
    <div>
      <div className="grid  w-full grid-cols-[10%_90%] grid-rows-2 items-center gap-x-4 rounded-lg bg-very-light-grayish-blue p-2">
        <div className="row-span-2 ml-2">
          <img
            className="h-12 w-12"
            src={`${profilePic}`}
            alt="Profile image"
          />
        </div>
        <div className=" -ml-1 mt-2 self-start text-wrap text-base">
          <span className="font-extrabold hover:cursor-pointer hover:text-blue">{`${profileName}`}</span>
          <span className="ml-2 text-dark-grayish-blue">{`${reaction}`}</span>
          <span
            className={`ml-2 font-extrabold text-dark-grayish-blue ${link} hover:cursor-pointer hover:text-blue`}
          >
            {`${headline}`}
          </span>
          <span className="">
            <div className=" inline-block h-3 w-3 scale-50 rounded-full bg-red"></div>
          </span>
        </div>
        <div
          className={`-ml-1  ${marginTop} text-base text-dark-grayish-blue`}
        >{`${timestamp}`}</div>
      </div>
      {activeMessage ? (
        <div
          className={`ml-[5.4rem] mt-2 rounded-md  border-[1px] border-solid p-4 text-[1.08rem] leading-6 text-dark-grayish-blue`}
        >{`${activeMessage}`}</div>
      ) : (
        false
      )}
    </div>
  );
}

export default NotificationItem;
