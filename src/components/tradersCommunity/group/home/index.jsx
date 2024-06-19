import CreatePost from "./CreatePost";
import Posts from "./posts";

const GroupHome = ({id}) => {
  return (
    <div>
      <CreatePost />

      <Posts id={id} />
    </div>
  );
};

export default GroupHome;
