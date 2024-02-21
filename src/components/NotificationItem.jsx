function NotificationItem({
  profilePic,
  profileName,
  reaction,
  timestamp,
  headline = false,
  marginTop = '-mt-4',
  link = '',
  activeMessage = '',
  unread = true,
  picture = false,
  adjustPicture = false,
}) {
  const unreadHighlight = unread
    ? 'rounded-lg bg-very-light-grayish-blue '
    : '';

  const hasPicture = picture ? '' : 'col-span-2';

  const stylePicture = adjustPicture ? 'self-baseline mt-2' : '';

  return (
    <div>
      <div
        className={`grid  w-full grid-cols-[10%_78%_12%] grid-rows-2 items-center gap-x-4 p-2 ${unreadHighlight}`}
      >
        <div className={`row-span-2 ml-2 ${stylePicture}`}>
          <img
            className="h-12 w-12"
            src={`${profilePic}`}
            alt="Profile image"
          />
        </div>
        <div
          className={`-ml-1 mt-2 self-start text-wrap text-base ${hasPicture}`}
        >
          <span className="font-extrabold hover:cursor-pointer hover:text-blue">{`${profileName}`}</span>
          <span className="ml-2 text-dark-grayish-blue">{`${reaction}`}</span>
          {headline ? (
            <span
              className={`ml-2 font-extrabold text-dark-grayish-blue ${link} hover:cursor-pointer hover:text-blue`}
            >
              {`${headline}`}
            </span>
          ) : (
            false
          )}

          {unread ? (
            <span className="">
              <div className="ml-[1px] inline-block h-3 w-3 scale-50 rounded-full bg-red"></div>
            </span>
          ) : (
            false
          )}
        </div>
        {picture ? (
          <img
            className="h-12 w-12 hover:cursor-pointer"
            src={`${picture}`}
            alt="Profile image"
          />
        ) : (
          false
        )}

        <div
          className={`-ml-1  ${marginTop} text-base text-dark-grayish-blue`}
        >{`${timestamp}`}</div>
      </div>
      {activeMessage ? (
        <div
          className={`ml-[5.4rem] mt-2 rounded-md  border-[1px] border-solid p-4 text-[1.08rem] leading-6 text-dark-grayish-blue hover:cursor-pointer hover:bg-light-grayish-blue-1`}
        >{`${activeMessage}`}</div>
      ) : (
        false
      )}
    </div>
  );
}

export default NotificationItem;
