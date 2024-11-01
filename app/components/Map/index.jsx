import { useTranslation } from "../../i18n/";
import "../PopUp/index.css";
export default async function PopForm({ id, name, lng }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng); // Викликаємо useTranslation без асинхронності
	return (
		<div className='btn-red popup-block'>
			<div className='orderbutton' onClick={handleTogglePopup}>
				<span>{t("HomePage.orderButton")}</span>
			</div>
			{isPopupVisible && (
				<>
					<div
						className={`popup-content visible`}
						aria-hidden={!isPopupVisible}
					>
						<button
							onClick={handleTogglePopup}
							className='close-button d-flex justify-content-end'
						>
							Х
						</button>
						<p className='h4 like-header mb-4'>{t("Popup.title")}</p>

						<form
							method='POST'
							onSubmit={handleSubmit}
							className='d-flex justify-content-center flex-column'
						>
							<div className='d-flex flex-column'>
								<label>{t("BigForm.phoneLabel")}</label>
								<input
									type='tel'
									name='tel'
									id='tel'
									required
									placeholder='+38 096 033 66 36'
									value={tel}
									onChange={(e) => setTel(e.target.value)}
								/>
							</div>

							<button type='submit' className='justify-content-center'>
								{t("BigForm.buttonText")}
							</button>
						</form>
						<div className='col-12 text-center'>
							<br />
						</div>
					</div>
					<div className='popup-overlay' onClick={handleTogglePopup}></div>
				</>
			)}
		</div>
	);
}
