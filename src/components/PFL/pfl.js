import React from "react";
import "./pfl.css";
import Case from "../../images/case.png";
import rocket from "../../images/rocket.png";
import leaf from "../../images/leaf.png";
import { FcNext } from "react-icons/fc";

const PFL = () => {
  return (
    <div className="pfl">
      <div className="pfl_dark">
        <div className="pfl_darkContainer">
          <img src={Case} alt="" />
          <h1>
            <strong>pack</strong>
          </h1>
        </div>
        <FcNext className="pfl_icon" />
        <div className="pfl_darkContainer">
          <img src={rocket} alt="" />
          <h1>
            <strong>fly</strong>
          </h1>
        </div>
        <FcNext className="pfl_icon" />
        <div className="pfl_darkContainer">
          <img src={leaf} alt="" />
          <h1>
            <strong>live</strong>
          </h1>
        </div>
        <FcNext className="pfl_icon" />
        <div className="pfl_container">
          <h1>
            <strong>ENJOY</strong>
            <p>A NEW WORLD!</p>
          </h1>
        </div>
      </div>
      <div className="pfl_light">
        <h1 className="title">PFL package</h1>
      </div>
      <div className="pfl_paragraph">
        <p>
          Out pack fly live package includes lpsum dolor sit amet, consectetur
          adipiscing elit. Vivamus ex ante, tristique sed elit id, scelerisque
          scelerisque risus. Nulla malesuada suscipit vehicula. Vestibulum
          mauris purus, malesuada eget laoreet et, mattis eu purus. Sed arcu
          enim, rhoncus non porta eu, finibus sed erat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed laoreet vitae nisi vel ornare.
          Cras velit neque, tincidunt et purus eu, semper dignissim risus.
          Quisque gravida interdum ipsum ac dignissim. Aenean fringilla libero
          leo, vitae varius magna convallis vel. Morbi luctus ligula erat, vitae
          pulvinar nunc pretium nec. Integer id facilisis nibh. In porta at
          tellus eget consectetur. Vestibulum nisl nunc, euismod a aliquet sit
          amet, fermentum in massa.
        </p>
        <p>
          Nunc quis eros facilisis, sagittis ex vitae, mattis sapien. Duis
          feugiat dictum vehicula. Nullam vestibulum tellus nisi, eu euismod
          velit finibus et. Aliquam id risus non sem pulvinar pulvinar in quis
          tellus. Pellentesque eget ipsum dignissim, molestie est vitae,
          tincidunt elit. Pellentesque suscipit, magna ac molestie luctus, magna
          massa placerat purus, in dictum urna dui vel massa. Curabitur eget est
          felis. Morbi eleifend libero a turpis sollicitudin aliquet. Aliquam id
          risus non sem pulvinar pulvinar in quis tellus. Pellentesque eget
          ipsum dignissim, molestie est vitae, tincidunt elit. Pellentesque
          suscipit, magna ac molestie luctus, magna massa placerat purus, in
          dictum urna dui vel massa. Curabitur eget est felis. Morbi eleifend
          libero a turpis sollicitudin aliquet.
        </p>
        <p>
          Aliquam id risus non sem pulvinar pulvinar in quis tellus.
          Pellentesque eget ipsum dignissim, molestie est vitae, tincidunt elit.
          Pellentesque suscipit, magna ac molestie luctus, magna massa placerat
          purus, in dictum urna dui vel massa. Curabitur eget est felis. Morbi
          eleifend libero a turpis sollicitudin aliquet.
        </p>
      </div>
    </div>
  );
};

export default PFL;
