import {markWebber,angelaGray,jacobThompson,rizkyHasanuddin,kimberlySmith,nathanPeterson,annaKim} from '../assets/Images'

const notifications = [
    {
      id: 1,
      name: 'Mark Webber',
      action: 'reacted to your recent post',
      post: 'My first tournament today!',
      time: '1m ago',
      profileImage: markWebber,
    },
    {
      id: 2,
      name: 'Angela Gray',
      action: 'followed you',
      time: '5m ago',
      profileImage: angelaGray,
    },
    {
      id: 3,
      name: 'Jacob Thompson',
      action: 'has joined your group',
      group: 'Chess Club',
      time: '1 day ago',
      profileImage: jacobThompson,
    },
    {
      id: 4,
      name: 'Rizky Hasanuddin',
      action: 'sent you a private message',
      message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
      time: '5 days ago',
      profileImage: rizkyHasanuddin,
    },
    {
      id: 5,
      name: 'Kimberly Smith',
      action: 'commented on your picture',
      time: '1 week ago',
      profileImage: kimberlySmith,
    },
    {
      id: 6,
      name: 'Nathan Peterson',
      action: 'reacted to your recent post',
      post: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      profileImage: nathanPeterson,
    },
    {
      id: 7,
      name: 'Anna Kim',
      action: 'left the group',
      group: 'Chess Club',
      time: '2 weeks ago',
      profileImage: annaKim,
    },
  ];
  
  export default notifications;