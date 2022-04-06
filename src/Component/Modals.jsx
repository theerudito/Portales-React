import { useModal } from "../Hooks/useModal";
import { ModalPortal } from "./ModalPortal";

export const ModalApp = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false);
	const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(
		false
	);
	//const [isOpenForm, openForm, closeForm] = useModal(false);

	return (
		<div>
			<button onClick={openModal1}>Abrir</button>
			<ModalPortal isOpen={isOpenModal1} closeModal={closeModal1}>
				<h3>Titulo</h3>
				<p>Este Es el contendido del modal</p>
				<img
					id="image"
					src="https://placeimg.com/200/200/animals"
					alt="imagen"
				/>
			</ModalPortal>

			<hr />
			<button onClick={openModalPortal}>Modal Portal</button>
			<ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
				<h3>Titulo</h3>
				<p>Este Es el contendido del modal</p>
				<img
					id="image"
					src="https://placeimg.com/200/200/animals"
					alt="imagen"
				/>
			</ModalPortal>
		</div>
	);
};
