import { FC, useEffect, useState } from "react";
import { useCrud } from "../../../hooks/use-crud";
import { PlayerModel } from "../../../models/player";
import { PositionModel } from "../../../models/position";
import { Button } from "../../atoms/button";
import { Input } from "../../atoms/input";
import Slider from "../../atoms/slider/slider";
import Typography from "../../atoms/typography";
import { ButtonContainer, PlayerFormWrapper, PlayerInputForm } from "./styles";

interface PlayerFormProps {
  player?: PlayerModel;
  label: string;
  action(data: any): void;
}

export const PlayerForm: FC<PlayerFormProps> = ({ label, action, player }) => {
  const { get } = useCrud("position");

  const [positions, setPositions] = useState<PositionModel[]>([]);

  const [playerState, setPlayerState] = useState(
    player
      ? player
      : {
          attack: 0,
          defense: 0,
          firstName: "",
          idPosition: 1,
          image: "",
          lastName: "",
          skills: 0,
        }
  );

  useEffect(() => {
    const fetchPositions = async () => {
      const response = await get();
      if (response && response.data) setPositions(response?.data);
    };
    fetchPositions();
  }, []);

  const onChangeData = (field: string) => (value: string | number) => {
    console.log(field, value);
    setPlayerState(() => ({
      ...playerState,
      [field]: value,
    }));
  };

  const onChangeSelection = (event: any) => {
    onChangeData("idPosition")(event.target.value);
  };

  return (
    <PlayerFormWrapper>
      <div>
        <Typography lineHeight="48" fontSize="36">
          {label}
        </Typography>
        <img
          className="mt-1"
          width={240}
          height={360}
          src={playerState.image}
        />
      </div>
      <div className="mt-3">
        <PlayerInputForm>
          <Input
            initialValue={playerState.firstName}
            onChange={onChangeData("firstName")}
            flexBasis="45%"
            placeholder="Nombre"
          />
          <Input
            initialValue={playerState.lastName}
            onChange={onChangeData("lastName")}
            flexBasis="45%"
            placeholder="Apellido"
          />
          <Input
            initialValue={playerState.image}
            onChange={onChangeData("image")}
            flexBasis="45%"
            placeholder="Imagen"
          />
          <select onChange={onChangeSelection} style={{ flexBasis: "45%" }}>
            {positions.map((position) => (
              <option key={position.id} value={position.id}>
                {position.description}
              </option>
            ))}
          </select>
        </PlayerInputForm>
        <div>
          <Slider
            defaultValue={playerState.attack}
            label="Ataque"
            value={playerState.attack}
            onChange={onChangeData("attack")}
          />
          <Slider
            defaultValue={playerState.attack}
            label="Defensa"
            value={playerState.defense}
            onChange={onChangeData("defense")}
          />
          <Slider
            defaultValue={playerState.attack}
            label="Skills"
            value={playerState.skills}
            onChange={onChangeData("skills")}
          />
        </div>
        <ButtonContainer>
          <Button
            onClick={() => {
              console.log(player);
              action(player);
            }}
            width="120px"
            padding="1rem"
          >
            Agregar
          </Button>
        </ButtonContainer>
      </div>
    </PlayerFormWrapper>
  );
};
