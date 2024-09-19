import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dropdown from "react-bootstrap/Dropdown";

import tickIcon from "./tick_icon.png";
import tickIconDone from "./tick_icon_done.png";

function Cart() {
  const [items, setItems] = useState([]);
  const [itemss, setItemss] = useState([]);
  const [chapterName, setChapterName] = useState("");
  const [descName, setDescName] = useState("");

  const addChapter = () => {
    const newItems = [...items, { name: chapterName, isDone: false }];
    setItems(newItems);
    setChapterName(""); // Clear input field after adding chapter
  };

  const removeChapter = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const removeChapterdesc = (index) => {
    const newItems = [...itemss];
    newItems.splice(index, 1);
    setItemss(newItems);
  };

  const toggleTick = (index) => {
    const newItems = [...items];
    newItems[index].isDone = !newItems[index].isDone;
    setItems(newItems);
  };

  const add_desc = () => {
    const newItems = [...itemss, { name: descName, isDone: false }];
    setItemss(newItems);
    setDescName(""); // Clear input field after adding description
  };

  function makeBold(index) {
    const h3Elements = document.querySelectorAll("#parent-list h3");
    h3Elements.forEach((element, idx) => {
      if (idx === index) {
        element.style.fontWeight = "1600";
      } else {
        element.style.fontWeight = "normal";
      }
    });
  }
  

  return (
    <div>
      <div className="p-2 flex-fill bd-highlight">
        <main>
          <h4
            style={{
              fontSize: "3.5rem",
              fontFamily: "Nunito, sans-serif",
              paddingTop: "2.5rem",
              paddingLeft: "45%",
            }}
          >
            To Do List
          </h4>
          <div
            className="container mt-5 col-lg-5"
            style={{ paddingTop: "0rem", marginTop: "15" }}
          >
            <div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Todo"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  style={{ fontSize: "1.7rem" }}
                  value={chapterName}
                  onChange={(e) => setChapterName(e.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter description for your Todo"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  style={{ fontSize: "1.7rem", height: "7rem" }}
                  value={descName}
                  onChange={(e) => setDescName(e.target.value)}
                />
                <button
                  id="add_btn"
                  className="btn btn-outline-success"
                  type="button"
                  style={{
                    fontSize: "1.7rem",
                    backgroundColor: "green",
                    color: "white",
                  }}
                  onClick={() => {
                    addChapter();
                    add_desc();
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <div className="p-2 flex-fill bd-highlight">
          <main>
            <div
              className="container mt-5 col-lg-5"
              style={{ paddingTop: "0rem", marginTop: "15" }}
            >
              <ul id="parent-list" className="custom-list">
                {items.map((item, index) => (
                  <>
                    <li
                      key={index}
                      className="list_group_item d-flex white-bg text-large"
                      style={{ marginTop: "1rem", borderRadius: "0.5rem" }}
                    >
                      <h3
                        className="flex-grow-1 white-bg text-large"
                        onDoubleClick={() => makeBold(index)}

                        style={{
                          marginBottom: 0,
                          fontSize: "1.7rem",
                          borderRadius: "0.5rem",
                          marginTop: "1rem",
                          marginLeft: "0.5rem"
                        }}
                      >
                        {item.name}
                      </h3>
                      <img
                        src={item.isDone ? tickIconDone : tickIcon}
                        alt="Tick"
                        onClick={() => toggleTick(index)}
                        style={{
                          marginRight: "1rem",
                          cursor: "pointer",
                          width: "3rem",
                          margin: "0.3rem",
                          height: "3rem",
                        }}
                      />
                      <button
                        className="btn btn-danger removeBtn"
                        style={{
                          fontSize: "1.6rem",
                          paddingLeft: "1rem",
                          borderRadius: "0rem",
                        }}
                        onClick={() => removeChapter(index)}
                      >
                        Delete
                      </button>
                    </li>
                    <li
                      key={index}
                      className="list_group_item d-flex white-bg text-large"
                      style={{ marginTop: "1rem", borderRadius: "0.5rem" }}
                    >
                      <p
                        className="flex-grow-1 white-bg text-large"
                        style={{
                          
                          fontSize: "1.7rem",
                          borderRadius: "0.5rem",
                          height: "3rem",
                          marginTop: "1rem",
                          marginLeft: "0.5rem"

                        }}
                      >
                        {itemss[index]?.name}
                      </p>
                    </li>
                  </>
                ))}
              </ul>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Cart;
