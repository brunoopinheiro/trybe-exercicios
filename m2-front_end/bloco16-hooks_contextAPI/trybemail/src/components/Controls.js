export default function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        Marcar todas como lida
      </button>
      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        Marcar todas como não lida
      </button>
    </div>
  );
}
