import { useEffect } from "react";

const Notification = ({ notification, markAsRead }) => {
  useEffect(() => {
    console.log(notification.isRead);
  }, [notification]);

  return (
    <div
      className={`w-full rounded-[8px] flex sm:gap-[18px] gap-[12px] items-start justify-start py-[1rem] px-[1.1rem] ${
        notification.isRead ? null : "bg-very-light-grayish-blue"
      } cursor-pointer`}
      onClick={() => markAsRead(notification.id)}
    >
      <img
        className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] rounded-full"
        src={notification.profileImage}
        alt={notification.name}
      />
      <div className="flex flex-col justify-start items-start sm:gap-[.5rem] gap-[.25rem]">
        <div className="font-normal text-dark-grayish-blue text-[14px]">
          <a className="text-very-dark-blue font-bold" href="">
            {notification.name}
          </a>{" "}
          {notification.action}{" "}
          <a
            className="font-bold hover:text-blue transition duration-100"
            href=""
          >
            {notification.post || notification.group}
          </a>{" "}
          <span
            className={`${
              notification.isRead ? "hidden" : "inline-block"
            } h-2 w-2 bg-red-600 rounded-full`}
          />
        </div>
        <p className="sm:text-[1rem] text-[.75rem] text-grayish-blue font-medium">{notification.time}</p>
        {notification.message ? (
          <p className="sm:text-[1rem] text-[14px] text-dark-grayish-blue py-[16px] px-[20px] border border-light-grayish-blue rounded-[4px]">
            {notification.message}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Notification;
