import "./app.scss";
import { useCrud } from "./hooks/use-crud";
import { useEffect, useState } from "react";
import PlayerList from "./components/organims/player-list";
import { PlayerModel } from "./models/player";
import { Button } from "./components/atoms/button";
import { Input } from "./components/atoms/input";
import { PlayerModal } from "./components/organims/player-modal";

const App = () => {
  const { get, post, put, remove } = useCrud();
  const [players, setPlayers] = useState<PlayerModel[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchPlayers = async () => {
    const response = await get();
    if (response?.data) {
      setPlayers(response?.data);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const onAddNew = async (data: any) => {
    await post(data);
    fetchPlayers();
    setShowModal(false);
  };

  const onDelete = async (data: any) => {
    await remove(data.id);
    fetchPlayers();
  };

  const onEdit = async (data: any) => {
    await put(data, data.id);
    fetchPlayers();
  };

  return (
    <div className="app">
      <h1 className="app__title">MI EQUIPO</h1>
      <div className="app__form">
        <Input placeholder="Buscar por nombre" />
        <Button onClick={() => setShowModal(true)} padding="1rem">
          Agregar
        </Button>
      </div>
      <div className="app__container">
        <PlayerList players={players} onEdit={onEdit} onDelete={onDelete} />
      </div>
      {showModal && (
        <PlayerModal
          onClose={() => setShowModal(false)}
          action={onAddNew}
        ></PlayerModal>
      )}
    </div>
  );
};

export default App;
