import { READ, UNREAD } from "../constants";

export default function EmailInbox({ messages, setMessageStatus }) {

  return (
    <div className="inbox">
      <section>
        <ul className="messages-list">
          {
            messages.map((m) => {
              const messageClass = m.status === READ
                ? 'message-read'
                : 'message-unread';

              return (
              <li key={ m.id }>
                <p className={ `message-title ${messageClass}` }>
                  {m.title}
                </p>
                <div>
                  <button
                    type="button"
                    title="Marcar como lida"
                    onClick={ () => setMessageStatus(m.id, READ) }
                  >
                    Lida
                  </button>
                  <button
                    type="button"
                    title="Marcar como não lida"
                    onClick={ () => setMessageStatus(m.id, UNREAD) }
                  >
                    Não Lida
                  </button>
                </div>
              </li>
            )})
          }
        </ul>
      </section>
    </div>
  );
}
