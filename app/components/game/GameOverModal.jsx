import { UIButton } from "../ui/UIButton";
import { UIModal } from "../ui/UIModal";

export function GameOverModal({ winnerName, players }) {
  return (
    <UIModal isOpen={winnerName}>
      <UIModal.Header>Игра завершена</UIModal.Header>
      <UIModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-8">{players}</div>
      </UIModal.Body>
      <UIModal.Footer>
        <UIButton variant="outline">Вернуться</UIButton>
        <UIButton>Играть снова</UIButton>
      </UIModal.Footer>
    </UIModal>
  );
}
