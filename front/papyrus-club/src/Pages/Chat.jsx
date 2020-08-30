import React, { Component } from "react";
import style from "../Styles/Components/Chat.module.scss";
import ChatWindow from "../Components/ChatWindow";
export class Home extends Component {
  render() {
    return (
      <div className={`row mt-5 mx-0`}>
        <div className={`col-4 text-center ${style.nopadding}`}>
          <div className={style.bookCover}>
          </div>
          <div>
            BOOK TITLE
          </div>
          <div>
            BOOK AUTHOR
          </div>
          <div>
            BOOK DESCRIPTION
          </div>
          <div>
            WHERE TO BUY:
          </div>
        </div>
        <div className={`col-8 ${style.nopadding}`}>
          <div className="mx-5 border text-center">
            <ChatWindow />
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
