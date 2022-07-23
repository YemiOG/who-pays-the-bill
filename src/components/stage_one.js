import React, { useContext, useState, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap/";
import { MyContext } from "../context";

const StageOne = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);
  const players = context.state.players;

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);
    if (validate) {
      setError([false, ""]);

      context.addPlayer(value);
      textInput.current.value = "";
    }
  };
  const validateInput = (value) => {
    if (value === "") {
      setError([true, "Sorry you need to input your name"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Sorry, you need at least 3 charactyers"]);
      return false;
    }
    return true;
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        {error[0] ? <Alert variant="danger">{error}</Alert> : null}

        <Button className="miami mt-3" variant="primary" type="submit">
          Add Player
        </Button>
        {players && players.length > 0 ? (
          <>
            <hr />

            <div>
              <ul className="list-group">
                {players.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                  >
                    {item}
                    <span
                      className="badge badge-danger"
                      onClick={() => context.removePlayer(index)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
              <div className="action_button" onClick={() => context.next()}>
                NEXT
              </div>
            </div>
          </>
        ) : null}
      </Form>
    </>
  );
};

export default StageOne;
