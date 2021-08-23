import React from "react";

import PostList from "./PostGrid/PostList";
import mergeSort from "./Hooks/mergeSort";

import "./Main.css";

const Main = (props) => {
  return (
    <>
      {/* Post List */}
      <PostList posts={mergeSort(props.posts)} />
      {/* Post List */}

      {/**************************** Instagram Sidebar 8*************************************/}
      <div className="embed">
        <div className="embed2">
          <p className="find">User</p>
        </div>
      </div>
      {/**************************** Instagram Sidebar 8*************************************/}
    </>
  );
};

export default Main;
