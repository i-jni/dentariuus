import styles from './Modale.module.scss'

const DeleteConfirmationModal = ({ onDelete, onCloseModal }) => (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Êtes-vous sûr de vouloir supprimer définitivement ?</h2>
        <div>
          <button className="btn red" onClick={onDelete}>Supprimer</button>
          <button className="btn darkblue" onClick={onCloseModal}>Annuler</button>
        </div>
      </div>
    </div>
);
  
export default DeleteConfirmationModal;