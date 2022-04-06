import ReactDom from "react-dom";
import "./Styles.css";

export const ModalPortal = ({ children, isOpen, closeModal }) => {
	const handleModalClick = (e) => {
		e.stopPropagation();
	};
	return ReactDom.createPortal(
		<article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalClick}>
				<button onClick={closeModal} className="modal-close">
					X
				</button>
				{children}
			</div>
		</article>,
		document.getElementById("modal")
	);
};
