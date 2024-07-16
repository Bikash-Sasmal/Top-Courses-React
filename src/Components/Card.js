import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    // logic
    if (likedCourses.includes(course.id)) {
      // pehlw se like hua he
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // pehle se like nahi he
      // insert karna he ye course liked courses me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }

      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-14px] flex justify-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.5rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.5rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
