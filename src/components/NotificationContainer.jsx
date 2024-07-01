import Notification from "./Notification";
import notifications from "../constants";
import { useEffect, useState } from "react";

const NotificationContainer = () => {
    const [notifs,setNotifs] = useState(notifications)
    const [notifsCount, setNotifsCount] = useState(0)
    console.log(notifs)

    const markAsRead = (id) => {
        setNotifs(notifs.map(notif => 
          notif.id === id && !notif.isRead ? { ...notif, isRead: true } : notif
        ));
      };

    const markAllAsRead = () =>{
        setNotifs(notifs.map((notif) =>
          !notif.isRead ?  { ...notif, isRead:true} : notif
         
        ))
    }

    const countNotification = () =>{
        let count = 0;
        notifs.map((notif)=>
            !notif.isRead ? count +=1 : count
        )
        setNotifsCount(count);
    } 

    useEffect(()=>{
        countNotification();
    },[notifs])


  return (
    <div className="max-w-[45rem] mx-auto mt-12 p-4 sm:p-8 bg-white">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-very-dark-blue text-[1.25rem] sm:text-[1.5rem] font-semibold flex items-center">
          Notifications{" "}
          <span className="text-white sm:text-[1rem] text-[.75rem] bg-blue py-[3px] px-[11px] rounded-[4px] ml-[8px]">
            {notifsCount}
          </span>
        </h1>
        <span className="sm:text-[1rem] text-[.75rem] text-dark-grayish-blue hover:text-very-dark-blue cursor-pointer" onClick={()=> markAllAsRead()}>Mark all as read</span>
      </div>
      <div className="mt-[2rem] flex flex-col justify-start items-start gap-[.5rem]">
        {
            notifs.map((notification)=> (
                <Notification markAsRead={markAsRead}  key={notification.id} notification={notification} />
            ))
        }
      </div>
    </div>
  );
};

export default NotificationContainer;
