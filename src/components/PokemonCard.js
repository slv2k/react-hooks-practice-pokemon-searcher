import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ image, name, hp }) {
  const [sprite, setSprite] = useState(true);

  function handleClick() {
    setSprite((sprite) => !sprite)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick} >
          <img alt="oh no!" src={sprite ? image.front : image.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
