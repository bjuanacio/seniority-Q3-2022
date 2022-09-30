import { FC } from "react";
import Typography from "../../atoms/typography";
import "./styles.css";

interface PlayerInfoProps {
  attack: number;
  defense: number;
  skills: number;
}

export const PlayerInfo: FC<PlayerInfoProps> = ({
  attack,
  defense,
  skills,
}) => {
  return (
    <div className="player-info-wrapper">
      <div>
        <Typography color="white">Ataque</Typography>
        <Typography fontSize="24" align="center" color="white">
          {attack}
        </Typography>
      </div>
      <div>
        <Typography color="white">Defensa</Typography>
        <Typography fontSize="24" align="center" color="white">
          {defense}
        </Typography>
      </div>
      <div>
        <Typography color="white">Skills</Typography>
        <Typography fontSize="24" align="center" color="white">
          {skills}
        </Typography>
      </div>
    </div>
  );
};
