import { useState } from "react";
import firstImage from "../assets/img1.jpeg";
import secondImage from "../assets/img2.jpeg";
import thirdImage from "../assets/img3.jpeg";
import './ProfileCard.css'

const ProfileCard = () => {
  interface User {
    id: number;
    name: string;
    title: string;
    imgUrl: string;
  }
  const user1 = {
    id: 1,
    name: "Amanda",
    title: "Developer",
    imgUrl: firstImage,
  };
  const user2 = {
    id: 2,
    name: "Sylve",
    title: "QA Specialist",
    imgUrl: secondImage,
  };
  const user3 = {
    id: 3,
    name: "Gloria",
    title: "UI/UX Designer",
    imgUrl: thirdImage,
  };
  const [users] = useState<User[]>([user1, user2, user3]);
  return (
    <div className="cards-section">
      {users.map((user) => {
        return (
          <div className="cards"
            key={user.id}>
            <img className="card-img"
              src={user.imgUrl}
            />
            <h2>{user.name}</h2>
            <p>{user.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCard;
